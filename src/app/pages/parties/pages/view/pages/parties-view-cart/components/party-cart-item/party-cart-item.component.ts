import { Party_DeletePartyCartItemGQL } from './../../../../../../../../graphql/generated/types';
import { PP_USER_ID } from 'src/app/constants';
import { Component, OnInit, Input } from '@angular/core';
import { PartyCartItem, Party_UpdatePartyCartItemGQL, PartyCartItemStatus } from 'src/app/graphql/generated/types';
import { PARTY_CART_ITEMS_CONNECTION_QUERY } from '../../parties-view-cart.page';
import gql from 'graphql-tag';
export const DELETE_PARTY_CART_ITEM_MUTATION = gql`
    mutation Party_DeletePartyCartItem($where: PartyCartItemWhereUniqueInput!) {
        deletePartyCartItem(where: $where) {
            id
        }
    }
`;

@Component({
    selector: 'party-cart-item',
    templateUrl: './party-cart-item.component.html',
    styleUrls: ['./party-cart-item.component.scss'],
})
export class PartyCartItemComponent implements OnInit {
    @Input() item: PartyCartItem;
    loading = false;
    isAuthor = false;
    isOwn = false;
    userId;
    colorMap = {
        pending: 'blue',
        accepted: 'green',
        rejected: 'red',
    };
    constructor(
        private readonly updateCartItemGQL: Party_UpdatePartyCartItemGQL,
        private readonly deleteCartItemGQL: Party_DeletePartyCartItemGQL,
    ) {}

    ngOnInit() {
        this.isAuthor = this.item.cart.party.author.id === localStorage.getItem(PP_USER_ID);
        this.isOwn = this.item.user.id === localStorage.getItem(PP_USER_ID);
        this.userId = localStorage.getItem(PP_USER_ID);
    }
    accept() {
        this.loading = true;
        this.updateCartItemGQL
            .mutate(
                {
                    where: { id: this.item.id },
                    data: {
                        status: PartyCartItemStatus.Accepted,
                    },
                },
                {
                    refetchQueries: [
                        {
                            query: PARTY_CART_ITEMS_CONNECTION_QUERY,
                            variables: { where: { cart: { id: this.item.cart.id } } },
                        },
                    ],
                },
            )
            .subscribe((res) => {
                this.loading = false;
            });
    }
    pending() {
        this.loading = true;
        this.updateCartItemGQL
            .mutate(
                {
                    where: { id: this.item.id },
                    data: {
                        status: PartyCartItemStatus.Pending,
                    },
                },
                {
                    refetchQueries: [
                        {
                            query: PARTY_CART_ITEMS_CONNECTION_QUERY,
                            variables: { where: { cart: { id: this.item.cart.id } } },
                        },
                    ],
                },
            )
            .subscribe((res) => {
                this.loading = false;
            });
    }
    reject() {
        this.loading = true;
        this.updateCartItemGQL
            .mutate(
                {
                    where: { id: this.item.id },
                    data: {
                        status: PartyCartItemStatus.Rejected,
                    },
                },
                {
                    refetchQueries: [
                        {
                            query: PARTY_CART_ITEMS_CONNECTION_QUERY,
                            variables: { where: { cart: { id: this.item.cart.id } } },
                        },
                    ],
                },
            )
            .subscribe((res) => {
                this.loading = false;
            });
    }
    delete() {
        this.loading = true;
        this.deleteCartItemGQL
            .mutate(
                {
                    where: { id: this.item.id },
                },
                {
                    refetchQueries: [
                        {
                            query: PARTY_CART_ITEMS_CONNECTION_QUERY,
                            variables: { where: { cart: { id: this.item.cart.id } } },
                        },
                    ],
                },
            )
            .subscribe((res) => {
                this.loading = false;
            });
    }
}
