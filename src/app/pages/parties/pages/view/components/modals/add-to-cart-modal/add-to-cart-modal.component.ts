import { ModalController } from '@ionic/angular';
import { PARTY_CART_ITEMS_CONNECTION_QUERY } from './../../../pages/parties-view-cart/parties-view-cart.page';
import { PP_USER_ID } from './../../../../../../../constants';
import { Party_CreatePartyCartItemGQL, PartyCartItemStatus } from './../../../../../../../graphql/generated/types';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT } from 'src/app/graphql/fragments';
import gql from 'graphql-tag';

export const CREATE_PARTY_CART_ITEM_MUTATION = gql`
    mutation Party_CreatePartyCartItem($data: PartyCartItemCreateInput!) {
        createPartyCartItem(data: $data) {
            ...PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT
        }
    }
    ${PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT}
`;

@Component({
    selector: 'app-add-to-cart-modal',
    templateUrl: './add-to-cart-modal.component.html',
    styleUrls: ['./add-to-cart-modal.component.scss'],
})
export class AddToCartModalComponent implements OnInit {
    @Input() cartId: string;
    createItemForm: FormGroup = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        price: new FormControl('0', [Validators.required]),
        quantity: new FormControl(0, [Validators.required]),
    });
    constructor(
        private readonly createCartItem: Party_CreatePartyCartItemGQL,
        private readonly modalCtrl: ModalController,
    ) {}

    ngOnInit() {}

    async onSubmit() {
        const { name, quantity, price } = this.createItemForm.value;
        this.createCartItem
            .mutate(
                {
                    data: {
                        price: Number(price) * 100,
                        name,
                        quantity,
                        user: { connect: { id: localStorage.getItem(PP_USER_ID) } },
                        cart: { connect: { id: this.cartId } },
                        status: PartyCartItemStatus.Pending,
                    },
                },
                {
                    refetchQueries: [
                        {
                            query: PARTY_CART_ITEMS_CONNECTION_QUERY,
                            variables: { where: { cart: { id: this.cartId } } },
                        },
                    ],
                },
            )
            .subscribe(async (res) => {
                await this.modalCtrl.dismiss();
            });
    }
}
