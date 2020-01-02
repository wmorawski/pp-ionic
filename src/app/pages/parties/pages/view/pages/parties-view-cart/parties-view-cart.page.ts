import { Router } from '@angular/router';
import { getPartyVariables } from 'src/app/shared/helpers/graphql-utils';
import {
    Party_CartItemsConnectionGQL,
    PartyQueryGQL,
    PartyCartItem,
    Party_UpdatePartyCartItemGQL,
    PartyCartItemStatus,
    Party_CartItemsConnectionQuery,
} from './../../../../../../graphql/generated/types';
import { AddToCartModalComponent } from './../../components/modals/add-to-cart-modal/add-to-cart-modal.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import gql from 'graphql-tag';
import { PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT } from 'src/app/graphql/fragments';
import { Party_CartItemsConnectionVariables, Party } from 'src/app/graphql/generated/types';
import { map } from 'rxjs/operators';

const variablesSubject = new BehaviorSubject<Party_CartItemsConnectionVariables>({});

export function getPartyCartItemsVariables() {
    return variablesSubject.getValue();
}
export const PARTY_CART_ITEMS_CONNECTION_QUERY = gql`
    query Party_CartItemsConnection(
        $where: PartyCartItemWhereInput
        $orderBy: PartyCartItemOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
    ) {
        partyCartItemsConnection(
            where: $where
            orderBy: $orderBy
            skip: $skip
            after: $after
            before: $before
            first: $first
            last: $last
        ) {
            pageInfo {
                hasNextPage
                endCursor
                startCursor
            }
            edges {
                node {
                    ...PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT
                }
            }
        }
        pagination: partyCartItemsConnection(where: $where) {
            aggregate {
                count
            }
        }
    }
    ${PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT}
`;

export const UPDATE_PARTY_CART_ITEM_MUTATION = gql`
    mutation Party_UpdatePartyCartItem($data: PartyCartItemUpdateInput!, $where: PartyCartItemWhereUniqueInput!) {
        updatePartyCartItem(data: $data, where: $where) {
            id
            quantity
            price
        }
    }
`;

export const PARTY_CART_ITEMS_PAGE_SIZE = 20;

@Component({
    selector: 'app-parties-view-cart',
    templateUrl: './parties-view-cart.page.html',
    styleUrls: ['./parties-view-cart.page.scss'],
})
export class PartiesViewCartPage implements OnInit {
    id: string;
    cartItems$;
    party: any;
    cartId: string;
    constructor(
        private readonly modalCtrl: ModalController,
        private readonly partyCartItemsGQL: Party_CartItemsConnectionGQL,
        private readonly partyQueryGQL: PartyQueryGQL,
        private readonly router: Router,
    ) {}

    async ngOnInit() {
        // this.cartItems$ = this.partyCartItemsGQL.watch({where: {}})
    }
    async ionViewWillEnter() {
        this.id = this.router.url.split('/')[2];
        this.partyQueryGQL.watch(getPartyVariables(this.id)).valueChanges.subscribe(({ data }) => {
            this.party = data.party;
            this.cartId = data.party.cart.id;
            this.cartItems$ = this.partyCartItemsGQL
                .watch({ where: { cart: { id: data.party.cart.id } } })
                .valueChanges.pipe(map((r) => r.data));
        });
    }

    async openAddModal() {
        (
            await this.modalCtrl.create({
                component: AddToCartModalComponent,
                componentProps: {
                    cartId: this.cartId,
                },
            })
        ).present();
    }
}
