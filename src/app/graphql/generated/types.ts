import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  Long: any,
};



export type AggregateAlbum = {
   __typename?: 'AggregateAlbum',
  count: Scalars['Int'],
};

export type AggregateArtist = {
   __typename?: 'AggregateArtist',
  count: Scalars['Int'],
};

export type AggregateChat = {
   __typename?: 'AggregateChat',
  count: Scalars['Int'],
};

export type AggregateFriendInvitation = {
   __typename?: 'AggregateFriendInvitation',
  count: Scalars['Int'],
};

export type AggregateLocation = {
   __typename?: 'AggregateLocation',
  count: Scalars['Int'],
};

export type AggregateMessage = {
   __typename?: 'AggregateMessage',
  count: Scalars['Int'],
};

export type AggregateParty = {
   __typename?: 'AggregateParty',
  count: Scalars['Int'],
};

export type AggregatePartyCart = {
   __typename?: 'AggregatePartyCart',
  count: Scalars['Int'],
};

export type AggregatePartyCartItem = {
   __typename?: 'AggregatePartyCartItem',
  count: Scalars['Int'],
};

export type AggregatePartyInvitation = {
   __typename?: 'AggregatePartyInvitation',
  count: Scalars['Int'],
};

export type AggregatePartySavedTrack = {
   __typename?: 'AggregatePartySavedTrack',
  count: Scalars['Int'],
};

export type AggregatePlaylist = {
   __typename?: 'AggregatePlaylist',
  count: Scalars['Int'],
};

export type AggregateTrack = {
   __typename?: 'AggregateTrack',
  count: Scalars['Int'],
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type Album = {
   __typename?: 'Album',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
  releaseDate: Scalars['String'],
  imageUrl: Scalars['String'],
};

export type AlbumConnection = {
   __typename?: 'AlbumConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<AlbumEdge>>,
  aggregate: AggregateAlbum,
};

export type AlbumCreateInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
  releaseDate: Scalars['String'],
  imageUrl: Scalars['String'],
};

export type AlbumCreateOneInput = {
  create?: Maybe<AlbumCreateInput>,
  connect?: Maybe<AlbumWhereUniqueInput>,
};

export type AlbumEdge = {
   __typename?: 'AlbumEdge',
  node: Album,
  cursor: Scalars['String'],
};

export enum AlbumOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpotifyIdAsc = 'spotifyId_ASC',
  SpotifyIdDesc = 'spotifyId_DESC',
  UriAsc = 'uri_ASC',
  UriDesc = 'uri_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  ImageUrlAsc = 'imageUrl_ASC',
  ImageUrlDesc = 'imageUrl_DESC'
}

export type AlbumPreviousValues = {
   __typename?: 'AlbumPreviousValues',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
  releaseDate: Scalars['String'],
  imageUrl: Scalars['String'],
};

export type AlbumSubscriptionPayload = {
   __typename?: 'AlbumSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Album>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<AlbumPreviousValues>,
};

export type AlbumSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<AlbumWhereInput>,
  AND?: Maybe<Array<AlbumSubscriptionWhereInput>>,
  OR?: Maybe<Array<AlbumSubscriptionWhereInput>>,
  NOT?: Maybe<Array<AlbumSubscriptionWhereInput>>,
};

export type AlbumUpdateDataInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  releaseDate?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
};

export type AlbumUpdateInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  releaseDate?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
};

export type AlbumUpdateManyMutationInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  releaseDate?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
};

export type AlbumUpdateOneRequiredInput = {
  create?: Maybe<AlbumCreateInput>,
  update?: Maybe<AlbumUpdateDataInput>,
  upsert?: Maybe<AlbumUpsertNestedInput>,
  connect?: Maybe<AlbumWhereUniqueInput>,
};

export type AlbumUpsertNestedInput = {
  update: AlbumUpdateDataInput,
  create: AlbumCreateInput,
};

export type AlbumWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
  spotifyId_not?: Maybe<Scalars['ID']>,
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_lt?: Maybe<Scalars['ID']>,
  spotifyId_lte?: Maybe<Scalars['ID']>,
  spotifyId_gt?: Maybe<Scalars['ID']>,
  spotifyId_gte?: Maybe<Scalars['ID']>,
  spotifyId_contains?: Maybe<Scalars['ID']>,
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  releaseDate?: Maybe<Scalars['String']>,
  releaseDate_not?: Maybe<Scalars['String']>,
  releaseDate_in?: Maybe<Array<Scalars['String']>>,
  releaseDate_not_in?: Maybe<Array<Scalars['String']>>,
  releaseDate_lt?: Maybe<Scalars['String']>,
  releaseDate_lte?: Maybe<Scalars['String']>,
  releaseDate_gt?: Maybe<Scalars['String']>,
  releaseDate_gte?: Maybe<Scalars['String']>,
  releaseDate_contains?: Maybe<Scalars['String']>,
  releaseDate_not_contains?: Maybe<Scalars['String']>,
  releaseDate_starts_with?: Maybe<Scalars['String']>,
  releaseDate_not_starts_with?: Maybe<Scalars['String']>,
  releaseDate_ends_with?: Maybe<Scalars['String']>,
  releaseDate_not_ends_with?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  imageUrl_not?: Maybe<Scalars['String']>,
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_lt?: Maybe<Scalars['String']>,
  imageUrl_lte?: Maybe<Scalars['String']>,
  imageUrl_gt?: Maybe<Scalars['String']>,
  imageUrl_gte?: Maybe<Scalars['String']>,
  imageUrl_contains?: Maybe<Scalars['String']>,
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<AlbumWhereInput>>,
  OR?: Maybe<Array<AlbumWhereInput>>,
  NOT?: Maybe<Array<AlbumWhereInput>>,
};

export type AlbumWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Artist = {
   __typename?: 'Artist',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
};

export type ArtistConnection = {
   __typename?: 'ArtistConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ArtistEdge>>,
  aggregate: AggregateArtist,
};

export type ArtistCreateInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
};

export type ArtistCreateManyInput = {
  create?: Maybe<Array<ArtistCreateInput>>,
  connect?: Maybe<Array<ArtistWhereUniqueInput>>,
};

export type ArtistEdge = {
   __typename?: 'ArtistEdge',
  node: Artist,
  cursor: Scalars['String'],
};

export enum ArtistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpotifyIdAsc = 'spotifyId_ASC',
  SpotifyIdDesc = 'spotifyId_DESC',
  UriAsc = 'uri_ASC',
  UriDesc = 'uri_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type ArtistPreviousValues = {
   __typename?: 'ArtistPreviousValues',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
};

export type ArtistScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
  spotifyId_not?: Maybe<Scalars['ID']>,
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_lt?: Maybe<Scalars['ID']>,
  spotifyId_lte?: Maybe<Scalars['ID']>,
  spotifyId_gt?: Maybe<Scalars['ID']>,
  spotifyId_gte?: Maybe<Scalars['ID']>,
  spotifyId_contains?: Maybe<Scalars['ID']>,
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<ArtistScalarWhereInput>>,
  OR?: Maybe<Array<ArtistScalarWhereInput>>,
  NOT?: Maybe<Array<ArtistScalarWhereInput>>,
};

export type ArtistSubscriptionPayload = {
   __typename?: 'ArtistSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Artist>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ArtistPreviousValues>,
};

export type ArtistSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ArtistWhereInput>,
  AND?: Maybe<Array<ArtistSubscriptionWhereInput>>,
  OR?: Maybe<Array<ArtistSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ArtistSubscriptionWhereInput>>,
};

export type ArtistUpdateDataInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ArtistUpdateInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ArtistUpdateManyDataInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ArtistUpdateManyInput = {
  create?: Maybe<Array<ArtistCreateInput>>,
  update?: Maybe<Array<ArtistUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<ArtistUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<ArtistWhereUniqueInput>>,
  connect?: Maybe<Array<ArtistWhereUniqueInput>>,
  set?: Maybe<Array<ArtistWhereUniqueInput>>,
  disconnect?: Maybe<Array<ArtistWhereUniqueInput>>,
  deleteMany?: Maybe<Array<ArtistScalarWhereInput>>,
  updateMany?: Maybe<Array<ArtistUpdateManyWithWhereNestedInput>>,
};

export type ArtistUpdateManyMutationInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ArtistUpdateManyWithWhereNestedInput = {
  where: ArtistScalarWhereInput,
  data: ArtistUpdateManyDataInput,
};

export type ArtistUpdateWithWhereUniqueNestedInput = {
  where: ArtistWhereUniqueInput,
  data: ArtistUpdateDataInput,
};

export type ArtistUpsertWithWhereUniqueNestedInput = {
  where: ArtistWhereUniqueInput,
  update: ArtistUpdateDataInput,
  create: ArtistCreateInput,
};

export type ArtistWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
  spotifyId_not?: Maybe<Scalars['ID']>,
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_lt?: Maybe<Scalars['ID']>,
  spotifyId_lte?: Maybe<Scalars['ID']>,
  spotifyId_gt?: Maybe<Scalars['ID']>,
  spotifyId_gte?: Maybe<Scalars['ID']>,
  spotifyId_contains?: Maybe<Scalars['ID']>,
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<ArtistWhereInput>>,
  OR?: Maybe<Array<ArtistWhereInput>>,
  NOT?: Maybe<Array<ArtistWhereInput>>,
};

export type ArtistWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
};

export type Chat = {
   __typename?: 'Chat',
  hasUnreadMessages: Scalars['Boolean'],
  id: Scalars['ID'],
  party: Party,
  members?: Maybe<Array<User>>,
  messages?: Maybe<Array<Message>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type ChatMembersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type ChatMessagesArgs = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ChatConnection = {
   __typename?: 'ChatConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ChatEdge>>,
  aggregate: AggregateChat,
};

export type ChatCreateInput = {
  id?: Maybe<Scalars['ID']>,
  party: PartyCreateOneInput,
  members?: Maybe<UserCreateManyWithoutChatsInput>,
  messages?: Maybe<MessageCreateManyWithoutChatInput>,
};

export type ChatCreateManyWithoutMembersInput = {
  create?: Maybe<Array<ChatCreateWithoutMembersInput>>,
  connect?: Maybe<Array<ChatWhereUniqueInput>>,
};

export type ChatCreateOneWithoutMessagesInput = {
  create?: Maybe<ChatCreateWithoutMessagesInput>,
  connect?: Maybe<ChatWhereUniqueInput>,
};

export type ChatCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>,
  party: PartyCreateOneInput,
  messages?: Maybe<MessageCreateManyWithoutChatInput>,
};

export type ChatCreateWithoutMessagesInput = {
  id?: Maybe<Scalars['ID']>,
  party: PartyCreateOneInput,
  members?: Maybe<UserCreateManyWithoutChatsInput>,
};

export type ChatEdge = {
   __typename?: 'ChatEdge',
  node: Chat,
  cursor: Scalars['String'],
};

export enum ChatOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ChatPreviousValues = {
   __typename?: 'ChatPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type ChatScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ChatScalarWhereInput>>,
  OR?: Maybe<Array<ChatScalarWhereInput>>,
  NOT?: Maybe<Array<ChatScalarWhereInput>>,
};

export type ChatSubscriptionPayload = {
   __typename?: 'ChatSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Chat>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ChatPreviousValues>,
};

export type ChatSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ChatWhereInput>,
  AND?: Maybe<Array<ChatSubscriptionWhereInput>>,
  OR?: Maybe<Array<ChatSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ChatSubscriptionWhereInput>>,
};

export type ChatUpdateInput = {
  party?: Maybe<PartyUpdateOneRequiredInput>,
  members?: Maybe<UserUpdateManyWithoutChatsInput>,
  messages?: Maybe<MessageUpdateManyWithoutChatInput>,
};

export type ChatUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<ChatCreateWithoutMembersInput>>,
  delete?: Maybe<Array<ChatWhereUniqueInput>>,
  connect?: Maybe<Array<ChatWhereUniqueInput>>,
  set?: Maybe<Array<ChatWhereUniqueInput>>,
  disconnect?: Maybe<Array<ChatWhereUniqueInput>>,
  update?: Maybe<Array<ChatUpdateWithWhereUniqueWithoutMembersInput>>,
  upsert?: Maybe<Array<ChatUpsertWithWhereUniqueWithoutMembersInput>>,
  deleteMany?: Maybe<Array<ChatScalarWhereInput>>,
};

export type ChatUpdateOneRequiredWithoutMessagesInput = {
  create?: Maybe<ChatCreateWithoutMessagesInput>,
  update?: Maybe<ChatUpdateWithoutMessagesDataInput>,
  upsert?: Maybe<ChatUpsertWithoutMessagesInput>,
  connect?: Maybe<ChatWhereUniqueInput>,
};

export type ChatUpdateWithoutMembersDataInput = {
  party?: Maybe<PartyUpdateOneRequiredInput>,
  messages?: Maybe<MessageUpdateManyWithoutChatInput>,
};

export type ChatUpdateWithoutMessagesDataInput = {
  party?: Maybe<PartyUpdateOneRequiredInput>,
  members?: Maybe<UserUpdateManyWithoutChatsInput>,
};

export type ChatUpdateWithWhereUniqueWithoutMembersInput = {
  where: ChatWhereUniqueInput,
  data: ChatUpdateWithoutMembersDataInput,
};

export type ChatUpsertWithoutMessagesInput = {
  update: ChatUpdateWithoutMessagesDataInput,
  create: ChatCreateWithoutMessagesInput,
};

export type ChatUpsertWithWhereUniqueWithoutMembersInput = {
  where: ChatWhereUniqueInput,
  update: ChatUpdateWithoutMembersDataInput,
  create: ChatCreateWithoutMembersInput,
};

export type ChatWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  party?: Maybe<PartyWhereInput>,
  members_every?: Maybe<UserWhereInput>,
  members_some?: Maybe<UserWhereInput>,
  members_none?: Maybe<UserWhereInput>,
  messages_every?: Maybe<MessageWhereInput>,
  messages_some?: Maybe<MessageWhereInput>,
  messages_none?: Maybe<MessageWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ChatWhereInput>>,
  OR?: Maybe<Array<ChatWhereInput>>,
  NOT?: Maybe<Array<ChatWhereInput>>,
};

export type ChatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type CombinePlaylistCreatedSpotifyPlaylistInput = {
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
};

export type CombinePlaylistPartyPlannerData = {
  playlists: Scalars['String'],
  partyId: Scalars['ID'],
  userId: Scalars['ID'],
  deleteAffected: Scalars['Boolean'],
  importable: Scalars['Boolean'],
};


export type FriendInvitation = {
   __typename?: 'FriendInvitation',
  id: Scalars['ID'],
  invitedBy: User,
  user: User,
  createdAt: Scalars['DateTime'],
  invitedUserId: Scalars['String'],
};

export type FriendInvitationConnection = {
   __typename?: 'FriendInvitationConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<FriendInvitationEdge>>,
  aggregate: AggregateFriendInvitation,
};

export type FriendInvitationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  invitedBy: UserCreateOneInput,
  user: UserCreateOneWithoutPendingFriendInvitationsInput,
  invitedUserId: Scalars['String'],
};

export type FriendInvitationCreateManyWithoutUserInput = {
  create?: Maybe<Array<FriendInvitationCreateWithoutUserInput>>,
  connect?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
};

export type FriendInvitationCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  invitedBy: UserCreateOneInput,
  invitedUserId: Scalars['String'],
};

export type FriendInvitationEdge = {
   __typename?: 'FriendInvitationEdge',
  node: FriendInvitation,
  cursor: Scalars['String'],
};

export enum FriendInvitationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  InvitedUserIdAsc = 'invitedUserId_ASC',
  InvitedUserIdDesc = 'invitedUserId_DESC'
}

export type FriendInvitationPreviousValues = {
   __typename?: 'FriendInvitationPreviousValues',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  invitedUserId: Scalars['String'],
};

export type FriendInvitationScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  invitedUserId?: Maybe<Scalars['String']>,
  invitedUserId_not?: Maybe<Scalars['String']>,
  invitedUserId_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_lt?: Maybe<Scalars['String']>,
  invitedUserId_lte?: Maybe<Scalars['String']>,
  invitedUserId_gt?: Maybe<Scalars['String']>,
  invitedUserId_gte?: Maybe<Scalars['String']>,
  invitedUserId_contains?: Maybe<Scalars['String']>,
  invitedUserId_not_contains?: Maybe<Scalars['String']>,
  invitedUserId_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_ends_with?: Maybe<Scalars['String']>,
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<FriendInvitationScalarWhereInput>>,
  OR?: Maybe<Array<FriendInvitationScalarWhereInput>>,
  NOT?: Maybe<Array<FriendInvitationScalarWhereInput>>,
};

export type FriendInvitationSubscriptionPayload = {
   __typename?: 'FriendInvitationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<FriendInvitation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<FriendInvitationPreviousValues>,
};

export type FriendInvitationSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<FriendInvitationWhereInput>,
  AND?: Maybe<Array<FriendInvitationSubscriptionWhereInput>>,
  OR?: Maybe<Array<FriendInvitationSubscriptionWhereInput>>,
  NOT?: Maybe<Array<FriendInvitationSubscriptionWhereInput>>,
};

export type FriendInvitationUpdateInput = {
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutPendingFriendInvitationsInput>,
  invitedUserId?: Maybe<Scalars['String']>,
};

export type FriendInvitationUpdateManyDataInput = {
  invitedUserId?: Maybe<Scalars['String']>,
};

export type FriendInvitationUpdateManyMutationInput = {
  invitedUserId?: Maybe<Scalars['String']>,
};

export type FriendInvitationUpdateManyWithoutUserInput = {
  create?: Maybe<Array<FriendInvitationCreateWithoutUserInput>>,
  delete?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  connect?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  set?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  disconnect?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  update?: Maybe<Array<FriendInvitationUpdateWithWhereUniqueWithoutUserInput>>,
  upsert?: Maybe<Array<FriendInvitationUpsertWithWhereUniqueWithoutUserInput>>,
  deleteMany?: Maybe<Array<FriendInvitationScalarWhereInput>>,
  updateMany?: Maybe<Array<FriendInvitationUpdateManyWithWhereNestedInput>>,
};

export type FriendInvitationUpdateManyWithWhereNestedInput = {
  where: FriendInvitationScalarWhereInput,
  data: FriendInvitationUpdateManyDataInput,
};

export type FriendInvitationUpdateWithoutUserDataInput = {
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  invitedUserId?: Maybe<Scalars['String']>,
};

export type FriendInvitationUpdateWithWhereUniqueWithoutUserInput = {
  where: FriendInvitationWhereUniqueInput,
  data: FriendInvitationUpdateWithoutUserDataInput,
};

export type FriendInvitationUpsertWithWhereUniqueWithoutUserInput = {
  where: FriendInvitationWhereUniqueInput,
  update: FriendInvitationUpdateWithoutUserDataInput,
  create: FriendInvitationCreateWithoutUserInput,
};

export type FriendInvitationWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  invitedBy?: Maybe<UserWhereInput>,
  user?: Maybe<UserWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  invitedUserId?: Maybe<Scalars['String']>,
  invitedUserId_not?: Maybe<Scalars['String']>,
  invitedUserId_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_lt?: Maybe<Scalars['String']>,
  invitedUserId_lte?: Maybe<Scalars['String']>,
  invitedUserId_gt?: Maybe<Scalars['String']>,
  invitedUserId_gte?: Maybe<Scalars['String']>,
  invitedUserId_contains?: Maybe<Scalars['String']>,
  invitedUserId_not_contains?: Maybe<Scalars['String']>,
  invitedUserId_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_ends_with?: Maybe<Scalars['String']>,
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<FriendInvitationWhereInput>>,
  OR?: Maybe<Array<FriendInvitationWhereInput>>,
  NOT?: Maybe<Array<FriendInvitationWhereInput>>,
};

export type FriendInvitationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Location = {
   __typename?: 'Location',
  id: Scalars['ID'],
  placeName: Scalars['String'],
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type LocationConnection = {
   __typename?: 'LocationConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<LocationEdge>>,
  aggregate: AggregateLocation,
};

export type LocationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  placeName: Scalars['String'],
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
};

export type LocationCreateOneInput = {
  create?: Maybe<LocationCreateInput>,
  connect?: Maybe<LocationWhereUniqueInput>,
};

export type LocationEdge = {
   __typename?: 'LocationEdge',
  node: Location,
  cursor: Scalars['String'],
};

export enum LocationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PlaceNameAsc = 'placeName_ASC',
  PlaceNameDesc = 'placeName_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LocationPreviousValues = {
   __typename?: 'LocationPreviousValues',
  id: Scalars['ID'],
  placeName: Scalars['String'],
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type LocationSubscriptionPayload = {
   __typename?: 'LocationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Location>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<LocationPreviousValues>,
};

export type LocationSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<LocationWhereInput>,
  AND?: Maybe<Array<LocationSubscriptionWhereInput>>,
  OR?: Maybe<Array<LocationSubscriptionWhereInput>>,
  NOT?: Maybe<Array<LocationSubscriptionWhereInput>>,
};

export type LocationUpdateDataInput = {
  placeName?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
};

export type LocationUpdateInput = {
  placeName?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
};

export type LocationUpdateManyMutationInput = {
  placeName?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
};

export type LocationUpdateOneRequiredInput = {
  create?: Maybe<LocationCreateInput>,
  update?: Maybe<LocationUpdateDataInput>,
  upsert?: Maybe<LocationUpsertNestedInput>,
  connect?: Maybe<LocationWhereUniqueInput>,
};

export type LocationUpsertNestedInput = {
  update: LocationUpdateDataInput,
  create: LocationCreateInput,
};

export type LocationWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  placeName?: Maybe<Scalars['String']>,
  placeName_not?: Maybe<Scalars['String']>,
  placeName_in?: Maybe<Array<Scalars['String']>>,
  placeName_not_in?: Maybe<Array<Scalars['String']>>,
  placeName_lt?: Maybe<Scalars['String']>,
  placeName_lte?: Maybe<Scalars['String']>,
  placeName_gt?: Maybe<Scalars['String']>,
  placeName_gte?: Maybe<Scalars['String']>,
  placeName_contains?: Maybe<Scalars['String']>,
  placeName_not_contains?: Maybe<Scalars['String']>,
  placeName_starts_with?: Maybe<Scalars['String']>,
  placeName_not_starts_with?: Maybe<Scalars['String']>,
  placeName_ends_with?: Maybe<Scalars['String']>,
  placeName_not_ends_with?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  latitude_not?: Maybe<Scalars['Float']>,
  latitude_in?: Maybe<Array<Scalars['Float']>>,
  latitude_not_in?: Maybe<Array<Scalars['Float']>>,
  latitude_lt?: Maybe<Scalars['Float']>,
  latitude_lte?: Maybe<Scalars['Float']>,
  latitude_gt?: Maybe<Scalars['Float']>,
  latitude_gte?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  longitude_not?: Maybe<Scalars['Float']>,
  longitude_in?: Maybe<Array<Scalars['Float']>>,
  longitude_not_in?: Maybe<Array<Scalars['Float']>>,
  longitude_lt?: Maybe<Scalars['Float']>,
  longitude_lte?: Maybe<Scalars['Float']>,
  longitude_gt?: Maybe<Scalars['Float']>,
  longitude_gte?: Maybe<Scalars['Float']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<LocationWhereInput>>,
  OR?: Maybe<Array<LocationWhereInput>>,
  NOT?: Maybe<Array<LocationWhereInput>>,
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Message = {
   __typename?: 'Message',
  isSendByMe: Scalars['Boolean'],
  optimisticallyAdded: Scalars['Boolean'],
  optimisticallyCreated: Scalars['Boolean'],
  hasOptimisticError: Scalars['Boolean'],
  id: Scalars['ID'],
  author: User,
  chat: Chat,
  content: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type MessageConnection = {
   __typename?: 'MessageConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<MessageEdge>>,
  aggregate: AggregateMessage,
};

export type MessageCreateInput = {
  id?: Maybe<Scalars['ID']>,
  author: UserCreateOneInput,
  chat: ChatCreateOneWithoutMessagesInput,
  content: Scalars['String'],
};

export type MessageCreateManyWithoutChatInput = {
  create?: Maybe<Array<MessageCreateWithoutChatInput>>,
  connect?: Maybe<Array<MessageWhereUniqueInput>>,
};

export type MessageCreateWithoutChatInput = {
  id?: Maybe<Scalars['ID']>,
  author: UserCreateOneInput,
  content: Scalars['String'],
};

export type MessageEdge = {
   __typename?: 'MessageEdge',
  node: Message,
  cursor: Scalars['String'],
};

export enum MessageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MessagePreviousValues = {
   __typename?: 'MessagePreviousValues',
  id: Scalars['ID'],
  content: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type MessageScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  content?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Scalars['String']>>,
  content_not_in?: Maybe<Array<Scalars['String']>>,
  content_lt?: Maybe<Scalars['String']>,
  content_lte?: Maybe<Scalars['String']>,
  content_gt?: Maybe<Scalars['String']>,
  content_gte?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<MessageScalarWhereInput>>,
  OR?: Maybe<Array<MessageScalarWhereInput>>,
  NOT?: Maybe<Array<MessageScalarWhereInput>>,
};

export type MessageSubscriptionPayload = {
   __typename?: 'MessageSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Message>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MessagePreviousValues>,
};

export type MessageSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MessageWhereInput>,
  AND?: Maybe<Array<MessageSubscriptionWhereInput>>,
  OR?: Maybe<Array<MessageSubscriptionWhereInput>>,
  NOT?: Maybe<Array<MessageSubscriptionWhereInput>>,
};

export type MessageUpdateInput = {
  author?: Maybe<UserUpdateOneRequiredInput>,
  chat?: Maybe<ChatUpdateOneRequiredWithoutMessagesInput>,
  content?: Maybe<Scalars['String']>,
};

export type MessageUpdateManyDataInput = {
  content?: Maybe<Scalars['String']>,
};

export type MessageUpdateManyMutationInput = {
  content?: Maybe<Scalars['String']>,
};

export type MessageUpdateManyWithoutChatInput = {
  create?: Maybe<Array<MessageCreateWithoutChatInput>>,
  delete?: Maybe<Array<MessageWhereUniqueInput>>,
  connect?: Maybe<Array<MessageWhereUniqueInput>>,
  set?: Maybe<Array<MessageWhereUniqueInput>>,
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>,
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutChatInput>>,
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutChatInput>>,
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>,
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>,
};

export type MessageUpdateManyWithWhereNestedInput = {
  where: MessageScalarWhereInput,
  data: MessageUpdateManyDataInput,
};

export type MessageUpdateWithoutChatDataInput = {
  author?: Maybe<UserUpdateOneRequiredInput>,
  content?: Maybe<Scalars['String']>,
};

export type MessageUpdateWithWhereUniqueWithoutChatInput = {
  where: MessageWhereUniqueInput,
  data: MessageUpdateWithoutChatDataInput,
};

export type MessageUpsertWithWhereUniqueWithoutChatInput = {
  where: MessageWhereUniqueInput,
  update: MessageUpdateWithoutChatDataInput,
  create: MessageCreateWithoutChatInput,
};

export type MessageWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  author?: Maybe<UserWhereInput>,
  chat?: Maybe<ChatWhereInput>,
  content?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Scalars['String']>>,
  content_not_in?: Maybe<Array<Scalars['String']>>,
  content_lt?: Maybe<Scalars['String']>,
  content_lte?: Maybe<Scalars['String']>,
  content_gt?: Maybe<Scalars['String']>,
  content_gte?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<MessageWhereInput>>,
  OR?: Maybe<Array<MessageWhereInput>>,
  NOT?: Maybe<Array<MessageWhereInput>>,
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createAlbum: Album,
  updateAlbum?: Maybe<Album>,
  updateManyAlbums: BatchPayload,
  upsertAlbum: Album,
  deleteAlbum?: Maybe<Album>,
  deleteManyAlbums: BatchPayload,
  createArtist: Artist,
  updateArtist?: Maybe<Artist>,
  updateManyArtists: BatchPayload,
  upsertArtist: Artist,
  deleteArtist?: Maybe<Artist>,
  deleteManyArtists: BatchPayload,
  createChat: Chat,
  updateChat?: Maybe<Chat>,
  upsertChat: Chat,
  deleteChat?: Maybe<Chat>,
  deleteManyChats: BatchPayload,
  createFriendInvitation: FriendInvitation,
  updateFriendInvitation?: Maybe<FriendInvitation>,
  updateManyFriendInvitations: BatchPayload,
  upsertFriendInvitation: FriendInvitation,
  deleteFriendInvitation?: Maybe<FriendInvitation>,
  deleteManyFriendInvitations: BatchPayload,
  createLocation: Location,
  updateLocation?: Maybe<Location>,
  updateManyLocations: BatchPayload,
  upsertLocation: Location,
  deleteLocation?: Maybe<Location>,
  deleteManyLocations: BatchPayload,
  createMessage: Message,
  updateMessage?: Maybe<Message>,
  updateManyMessages: BatchPayload,
  upsertMessage: Message,
  deleteMessage?: Maybe<Message>,
  deleteManyMessages: BatchPayload,
  createParty: Party,
  updateParty?: Maybe<Party>,
  updateManyParties: BatchPayload,
  upsertParty: Party,
  deleteParty?: Maybe<Party>,
  deleteManyParties: BatchPayload,
  createPartyCart: PartyCart,
  updatePartyCart?: Maybe<PartyCart>,
  upsertPartyCart: PartyCart,
  deletePartyCart?: Maybe<PartyCart>,
  deleteManyPartyCarts: BatchPayload,
  createPartyCartItem: PartyCartItem,
  updatePartyCartItem?: Maybe<PartyCartItem>,
  updateManyPartyCartItems: BatchPayload,
  upsertPartyCartItem: PartyCartItem,
  deletePartyCartItem?: Maybe<PartyCartItem>,
  deleteManyPartyCartItems: BatchPayload,
  createPartyInvitation: PartyInvitation,
  updatePartyInvitation?: Maybe<PartyInvitation>,
  updateManyPartyInvitations: BatchPayload,
  upsertPartyInvitation: PartyInvitation,
  deletePartyInvitation?: Maybe<PartyInvitation>,
  deleteManyPartyInvitations: BatchPayload,
  createPartySavedTrack: PartySavedTrack,
  updatePartySavedTrack?: Maybe<PartySavedTrack>,
  updateManyPartySavedTracks: BatchPayload,
  upsertPartySavedTrack: PartySavedTrack,
  deletePartySavedTrack?: Maybe<PartySavedTrack>,
  deleteManyPartySavedTracks: BatchPayload,
  createPlaylist: Playlist,
  updatePlaylist?: Maybe<Playlist>,
  updateManyPlaylists: BatchPayload,
  upsertPlaylist: Playlist,
  deletePlaylist?: Maybe<Playlist>,
  deleteManyPlaylists: BatchPayload,
  createTrack: Track,
  updateTrack?: Maybe<Track>,
  updateManyTracks: BatchPayload,
  upsertTrack: Track,
  deleteTrack?: Maybe<Track>,
  deleteManyTracks: BatchPayload,
  createUser: User,
  updateUser?: Maybe<User>,
  updateManyUsers: BatchPayload,
  upsertUser: User,
  deleteUser?: Maybe<User>,
  deleteManyUsers: BatchPayload,
  importPlaylistsToParty: Scalars['Boolean'],
  combinePlaylists: Playlist,
  joinParty?: Maybe<Scalars['Boolean']>,
  signup: AuthPayload,
  login: AuthPayload,
  socialLogin: AuthPayload,
  updateMe: User,
  requestReset?: Maybe<SuccessMessage>,
  acceptFriendInvitation?: Maybe<Scalars['Boolean']>,
  unfriendPerson?: Maybe<Scalars['Boolean']>,
  resetPassword?: Maybe<AuthPayload>,
};


export type MutationCreateAlbumArgs = {
  data: AlbumCreateInput
};


export type MutationUpdateAlbumArgs = {
  data: AlbumUpdateInput,
  where: AlbumWhereUniqueInput
};


export type MutationUpdateManyAlbumsArgs = {
  data: AlbumUpdateManyMutationInput,
  where?: Maybe<AlbumWhereInput>
};


export type MutationUpsertAlbumArgs = {
  where: AlbumWhereUniqueInput,
  create: AlbumCreateInput,
  update: AlbumUpdateInput
};


export type MutationDeleteAlbumArgs = {
  where: AlbumWhereUniqueInput
};


export type MutationDeleteManyAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>
};


export type MutationCreateArtistArgs = {
  data: ArtistCreateInput
};


export type MutationUpdateArtistArgs = {
  data: ArtistUpdateInput,
  where: ArtistWhereUniqueInput
};


export type MutationUpdateManyArtistsArgs = {
  data: ArtistUpdateManyMutationInput,
  where?: Maybe<ArtistWhereInput>
};


export type MutationUpsertArtistArgs = {
  where: ArtistWhereUniqueInput,
  create: ArtistCreateInput,
  update: ArtistUpdateInput
};


export type MutationDeleteArtistArgs = {
  where: ArtistWhereUniqueInput
};


export type MutationDeleteManyArtistsArgs = {
  where?: Maybe<ArtistWhereInput>
};


export type MutationCreateChatArgs = {
  data: ChatCreateInput
};


export type MutationUpdateChatArgs = {
  data: ChatUpdateInput,
  where: ChatWhereUniqueInput
};


export type MutationUpsertChatArgs = {
  where: ChatWhereUniqueInput,
  create: ChatCreateInput,
  update: ChatUpdateInput
};


export type MutationDeleteChatArgs = {
  where: ChatWhereUniqueInput
};


export type MutationDeleteManyChatsArgs = {
  where?: Maybe<ChatWhereInput>
};


export type MutationCreateFriendInvitationArgs = {
  data: FriendInvitationCreateInput
};


export type MutationUpdateFriendInvitationArgs = {
  data: FriendInvitationUpdateInput,
  where: FriendInvitationWhereUniqueInput
};


export type MutationUpdateManyFriendInvitationsArgs = {
  data: FriendInvitationUpdateManyMutationInput,
  where?: Maybe<FriendInvitationWhereInput>
};


export type MutationUpsertFriendInvitationArgs = {
  where: FriendInvitationWhereUniqueInput,
  create: FriendInvitationCreateInput,
  update: FriendInvitationUpdateInput
};


export type MutationDeleteFriendInvitationArgs = {
  where: FriendInvitationWhereUniqueInput
};


export type MutationDeleteManyFriendInvitationsArgs = {
  where?: Maybe<FriendInvitationWhereInput>
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput,
  where: LocationWhereUniqueInput
};


export type MutationUpdateManyLocationsArgs = {
  data: LocationUpdateManyMutationInput,
  where?: Maybe<LocationWhereInput>
};


export type MutationUpsertLocationArgs = {
  where: LocationWhereUniqueInput,
  create: LocationCreateInput,
  update: LocationUpdateInput
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput
};


export type MutationDeleteManyLocationsArgs = {
  where?: Maybe<LocationWhereInput>
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput
};


export type MutationUpdateMessageArgs = {
  data: MessageUpdateInput,
  where: MessageWhereUniqueInput
};


export type MutationUpdateManyMessagesArgs = {
  data: MessageUpdateManyMutationInput,
  where?: Maybe<MessageWhereInput>
};


export type MutationUpsertMessageArgs = {
  where: MessageWhereUniqueInput,
  create: MessageCreateInput,
  update: MessageUpdateInput
};


export type MutationDeleteMessageArgs = {
  where: MessageWhereUniqueInput
};


export type MutationDeleteManyMessagesArgs = {
  where?: Maybe<MessageWhereInput>
};


export type MutationCreatePartyArgs = {
  data: PartyCreateInput
};


export type MutationUpdatePartyArgs = {
  data: PartyUpdateInput,
  where: PartyWhereUniqueInput
};


export type MutationUpdateManyPartiesArgs = {
  data: PartyUpdateManyMutationInput,
  where?: Maybe<PartyWhereInput>
};


export type MutationUpsertPartyArgs = {
  where: PartyWhereUniqueInput,
  create: PartyCreateInput,
  update: PartyUpdateInput
};


export type MutationDeletePartyArgs = {
  where: PartyWhereUniqueInput
};


export type MutationDeleteManyPartiesArgs = {
  where?: Maybe<PartyWhereInput>
};


export type MutationCreatePartyCartArgs = {
  data: PartyCartCreateInput
};


export type MutationUpdatePartyCartArgs = {
  data: PartyCartUpdateInput,
  where: PartyCartWhereUniqueInput
};


export type MutationUpsertPartyCartArgs = {
  where: PartyCartWhereUniqueInput,
  create: PartyCartCreateInput,
  update: PartyCartUpdateInput
};


export type MutationDeletePartyCartArgs = {
  where: PartyCartWhereUniqueInput
};


export type MutationDeleteManyPartyCartsArgs = {
  where?: Maybe<PartyCartWhereInput>
};


export type MutationCreatePartyCartItemArgs = {
  data: PartyCartItemCreateInput
};


export type MutationUpdatePartyCartItemArgs = {
  data: PartyCartItemUpdateInput,
  where: PartyCartItemWhereUniqueInput
};


export type MutationUpdateManyPartyCartItemsArgs = {
  data: PartyCartItemUpdateManyMutationInput,
  where?: Maybe<PartyCartItemWhereInput>
};


export type MutationUpsertPartyCartItemArgs = {
  where: PartyCartItemWhereUniqueInput,
  create: PartyCartItemCreateInput,
  update: PartyCartItemUpdateInput
};


export type MutationDeletePartyCartItemArgs = {
  where: PartyCartItemWhereUniqueInput
};


export type MutationDeleteManyPartyCartItemsArgs = {
  where?: Maybe<PartyCartItemWhereInput>
};


export type MutationCreatePartyInvitationArgs = {
  data: PartyInvitationCreateInput
};


export type MutationUpdatePartyInvitationArgs = {
  data: PartyInvitationUpdateInput,
  where: PartyInvitationWhereUniqueInput
};


export type MutationUpdateManyPartyInvitationsArgs = {
  data: PartyInvitationUpdateManyMutationInput,
  where?: Maybe<PartyInvitationWhereInput>
};


export type MutationUpsertPartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput,
  create: PartyInvitationCreateInput,
  update: PartyInvitationUpdateInput
};


export type MutationDeletePartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput
};


export type MutationDeleteManyPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>
};


export type MutationCreatePartySavedTrackArgs = {
  data: PartySavedTrackCreateInput
};


export type MutationUpdatePartySavedTrackArgs = {
  data: PartySavedTrackUpdateInput,
  where: PartySavedTrackWhereUniqueInput
};


export type MutationUpdateManyPartySavedTracksArgs = {
  data: PartySavedTrackUpdateManyMutationInput,
  where?: Maybe<PartySavedTrackWhereInput>
};


export type MutationUpsertPartySavedTrackArgs = {
  where: PartySavedTrackWhereUniqueInput,
  create: PartySavedTrackCreateInput,
  update: PartySavedTrackUpdateInput
};


export type MutationDeletePartySavedTrackArgs = {
  where: PartySavedTrackWhereUniqueInput
};


export type MutationDeleteManyPartySavedTracksArgs = {
  where?: Maybe<PartySavedTrackWhereInput>
};


export type MutationCreatePlaylistArgs = {
  data: PlaylistCreateInput
};


export type MutationUpdatePlaylistArgs = {
  data: PlaylistUpdateInput,
  where: PlaylistWhereUniqueInput
};


export type MutationUpdateManyPlaylistsArgs = {
  data: PlaylistUpdateManyMutationInput,
  where?: Maybe<PlaylistWhereInput>
};


export type MutationUpsertPlaylistArgs = {
  where: PlaylistWhereUniqueInput,
  create: PlaylistCreateInput,
  update: PlaylistUpdateInput
};


export type MutationDeletePlaylistArgs = {
  where: PlaylistWhereUniqueInput
};


export type MutationDeleteManyPlaylistsArgs = {
  where?: Maybe<PlaylistWhereInput>
};


export type MutationCreateTrackArgs = {
  data: TrackCreateInput
};


export type MutationUpdateTrackArgs = {
  data: TrackUpdateInput,
  where: TrackWhereUniqueInput
};


export type MutationUpdateManyTracksArgs = {
  data: TrackUpdateManyMutationInput,
  where?: Maybe<TrackWhereInput>
};


export type MutationUpsertTrackArgs = {
  where: TrackWhereUniqueInput,
  create: TrackCreateInput,
  update: TrackUpdateInput
};


export type MutationDeleteTrackArgs = {
  where: TrackWhereUniqueInput
};


export type MutationDeleteManyTracksArgs = {
  where?: Maybe<TrackWhereInput>
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationImportPlaylistsToPartyArgs = {
  playlists: Scalars['String'],
  partyId: Scalars['ID']
};


export type MutationCombinePlaylistsArgs = {
  partyPlannerData: CombinePlaylistPartyPlannerData,
  spotifyData: CombinePlaylistCreatedSpotifyPlaylistInput
};


export type MutationJoinPartyArgs = {
  partyId: Scalars['ID']
};


export type MutationSignupArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSocialLoginArgs = {
  id: Scalars['String'],
  email: Scalars['String'],
  avatar?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  provider: SocialMediaType
};


export type MutationUpdateMeArgs = {
  name?: Maybe<Scalars['String']>
};


export type MutationRequestResetArgs = {
  email: Scalars['String']
};


export type MutationAcceptFriendInvitationArgs = {
  invitationId: Scalars['ID'],
  invitingUserId: Scalars['ID']
};


export type MutationUnfriendPersonArgs = {
  personToUnfriendId: Scalars['ID']
};


export type MutationResetPasswordArgs = {
  resetToken: Scalars['String'],
  password: Scalars['String'],
  confirmPassword: Scalars['String']
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Party = {
   __typename?: 'Party',
  id: Scalars['ID'],
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: User,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  location: Location,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<Array<User>>,
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  inviteSecret: Scalars['String'],
  playlist?: Maybe<Array<Playlist>>,
  savedTracks?: Maybe<Array<PartySavedTrack>>,
  cart: PartyCart,
};


export type PartyMembersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartyPlaylistArgs = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartySavedTracksArgs = {
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PartyAuthenticationResult = {
   __typename?: 'PartyAuthenticationResult',
  canJoin: Scalars['Boolean'],
  isMember: Scalars['Boolean'],
  party?: Maybe<Party>,
};

export type PartyCart = {
   __typename?: 'PartyCart',
  id: Scalars['ID'],
  party: Party,
  items?: Maybe<Array<PartyCartItem>>,
};


export type PartyCartItemsArgs = {
  where?: Maybe<PartyCartItemWhereInput>,
  orderBy?: Maybe<PartyCartItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PartyCartConnection = {
   __typename?: 'PartyCartConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PartyCartEdge>>,
  aggregate: AggregatePartyCart,
};

export type PartyCartCreateInput = {
  id?: Maybe<Scalars['ID']>,
  party: PartyCreateOneWithoutCartInput,
  items?: Maybe<PartyCartItemCreateManyWithoutCartInput>,
};

export type PartyCartCreateOneWithoutItemsInput = {
  create?: Maybe<PartyCartCreateWithoutItemsInput>,
  connect?: Maybe<PartyCartWhereUniqueInput>,
};

export type PartyCartCreateOneWithoutPartyInput = {
  create?: Maybe<PartyCartCreateWithoutPartyInput>,
  connect?: Maybe<PartyCartWhereUniqueInput>,
};

export type PartyCartCreateWithoutItemsInput = {
  id?: Maybe<Scalars['ID']>,
  party: PartyCreateOneWithoutCartInput,
};

export type PartyCartCreateWithoutPartyInput = {
  id?: Maybe<Scalars['ID']>,
  items?: Maybe<PartyCartItemCreateManyWithoutCartInput>,
};

export type PartyCartEdge = {
   __typename?: 'PartyCartEdge',
  node: PartyCart,
  cursor: Scalars['String'],
};

export type PartyCartItem = {
   __typename?: 'PartyCartItem',
  id: Scalars['ID'],
  cart: PartyCart,
  user: User,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
  quantity: Scalars['Int'],
};

export type PartyCartItemConnection = {
   __typename?: 'PartyCartItemConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PartyCartItemEdge>>,
  aggregate: AggregatePartyCartItem,
};

export type PartyCartItemCreateInput = {
  id?: Maybe<Scalars['ID']>,
  cart: PartyCartCreateOneWithoutItemsInput,
  user: UserCreateOneWithoutCartItemsInput,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemCreateManyWithoutCartInput = {
  create?: Maybe<Array<PartyCartItemCreateWithoutCartInput>>,
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
};

export type PartyCartItemCreateManyWithoutUserInput = {
  create?: Maybe<Array<PartyCartItemCreateWithoutUserInput>>,
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
};

export type PartyCartItemCreateWithoutCartInput = {
  id?: Maybe<Scalars['ID']>,
  user: UserCreateOneWithoutCartItemsInput,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  cart: PartyCartCreateOneWithoutItemsInput,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemEdge = {
   __typename?: 'PartyCartItemEdge',
  node: PartyCartItem,
  cursor: Scalars['String'],
};

export enum PartyCartItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC'
}

export type PartyCartItemPreviousValues = {
   __typename?: 'PartyCartItemPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
  quantity: Scalars['Int'],
};

export type PartyCartItemScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  price_not?: Maybe<Scalars['Float']>,
  price_in?: Maybe<Array<Scalars['Float']>>,
  price_not_in?: Maybe<Array<Scalars['Float']>>,
  price_lt?: Maybe<Scalars['Float']>,
  price_lte?: Maybe<Scalars['Float']>,
  price_gt?: Maybe<Scalars['Float']>,
  price_gte?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  status_not?: Maybe<PartyCartItemStatus>,
  status_in?: Maybe<Array<PartyCartItemStatus>>,
  status_not_in?: Maybe<Array<PartyCartItemStatus>>,
  quantity?: Maybe<Scalars['Int']>,
  quantity_not?: Maybe<Scalars['Int']>,
  quantity_in?: Maybe<Array<Scalars['Int']>>,
  quantity_not_in?: Maybe<Array<Scalars['Int']>>,
  quantity_lt?: Maybe<Scalars['Int']>,
  quantity_lte?: Maybe<Scalars['Int']>,
  quantity_gt?: Maybe<Scalars['Int']>,
  quantity_gte?: Maybe<Scalars['Int']>,
  AND?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  OR?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  NOT?: Maybe<Array<PartyCartItemScalarWhereInput>>,
};

export enum PartyCartItemStatus {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED'
}

export type PartyCartItemSubscriptionPayload = {
   __typename?: 'PartyCartItemSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PartyCartItem>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartyCartItemPreviousValues>,
};

export type PartyCartItemSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyCartItemWhereInput>,
  AND?: Maybe<Array<PartyCartItemSubscriptionWhereInput>>,
  OR?: Maybe<Array<PartyCartItemSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PartyCartItemSubscriptionWhereInput>>,
};

export type PartyCartItemUpdateInput = {
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutItemsInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutCartItemsInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateManyWithoutCartInput = {
  create?: Maybe<Array<PartyCartItemCreateWithoutCartInput>>,
  delete?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  set?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  update?: Maybe<Array<PartyCartItemUpdateWithWhereUniqueWithoutCartInput>>,
  upsert?: Maybe<Array<PartyCartItemUpsertWithWhereUniqueWithoutCartInput>>,
  deleteMany?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  updateMany?: Maybe<Array<PartyCartItemUpdateManyWithWhereNestedInput>>,
};

export type PartyCartItemUpdateManyWithoutUserInput = {
  create?: Maybe<Array<PartyCartItemCreateWithoutUserInput>>,
  delete?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  set?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  update?: Maybe<Array<PartyCartItemUpdateWithWhereUniqueWithoutUserInput>>,
  upsert?: Maybe<Array<PartyCartItemUpsertWithWhereUniqueWithoutUserInput>>,
  deleteMany?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  updateMany?: Maybe<Array<PartyCartItemUpdateManyWithWhereNestedInput>>,
};

export type PartyCartItemUpdateManyWithWhereNestedInput = {
  where: PartyCartItemScalarWhereInput,
  data: PartyCartItemUpdateManyDataInput,
};

export type PartyCartItemUpdateWithoutCartDataInput = {
  user?: Maybe<UserUpdateOneRequiredWithoutCartItemsInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateWithoutUserDataInput = {
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutItemsInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
};

export type PartyCartItemUpdateWithWhereUniqueWithoutCartInput = {
  where: PartyCartItemWhereUniqueInput,
  data: PartyCartItemUpdateWithoutCartDataInput,
};

export type PartyCartItemUpdateWithWhereUniqueWithoutUserInput = {
  where: PartyCartItemWhereUniqueInput,
  data: PartyCartItemUpdateWithoutUserDataInput,
};

export type PartyCartItemUpsertWithWhereUniqueWithoutCartInput = {
  where: PartyCartItemWhereUniqueInput,
  update: PartyCartItemUpdateWithoutCartDataInput,
  create: PartyCartItemCreateWithoutCartInput,
};

export type PartyCartItemUpsertWithWhereUniqueWithoutUserInput = {
  where: PartyCartItemWhereUniqueInput,
  update: PartyCartItemUpdateWithoutUserDataInput,
  create: PartyCartItemCreateWithoutUserInput,
};

export type PartyCartItemWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  cart?: Maybe<PartyCartWhereInput>,
  user?: Maybe<UserWhereInput>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  price_not?: Maybe<Scalars['Float']>,
  price_in?: Maybe<Array<Scalars['Float']>>,
  price_not_in?: Maybe<Array<Scalars['Float']>>,
  price_lt?: Maybe<Scalars['Float']>,
  price_lte?: Maybe<Scalars['Float']>,
  price_gt?: Maybe<Scalars['Float']>,
  price_gte?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  status_not?: Maybe<PartyCartItemStatus>,
  status_in?: Maybe<Array<PartyCartItemStatus>>,
  status_not_in?: Maybe<Array<PartyCartItemStatus>>,
  quantity?: Maybe<Scalars['Int']>,
  quantity_not?: Maybe<Scalars['Int']>,
  quantity_in?: Maybe<Array<Scalars['Int']>>,
  quantity_not_in?: Maybe<Array<Scalars['Int']>>,
  quantity_lt?: Maybe<Scalars['Int']>,
  quantity_lte?: Maybe<Scalars['Int']>,
  quantity_gt?: Maybe<Scalars['Int']>,
  quantity_gte?: Maybe<Scalars['Int']>,
  AND?: Maybe<Array<PartyCartItemWhereInput>>,
  OR?: Maybe<Array<PartyCartItemWhereInput>>,
  NOT?: Maybe<Array<PartyCartItemWhereInput>>,
};

export type PartyCartItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum PartyCartOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type PartyCartPreviousValues = {
   __typename?: 'PartyCartPreviousValues',
  id: Scalars['ID'],
};

export type PartyCartSubscriptionPayload = {
   __typename?: 'PartyCartSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PartyCart>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartyCartPreviousValues>,
};

export type PartyCartSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyCartWhereInput>,
  AND?: Maybe<Array<PartyCartSubscriptionWhereInput>>,
  OR?: Maybe<Array<PartyCartSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PartyCartSubscriptionWhereInput>>,
};

export type PartyCartUpdateInput = {
  party?: Maybe<PartyUpdateOneRequiredWithoutCartInput>,
  items?: Maybe<PartyCartItemUpdateManyWithoutCartInput>,
};

export type PartyCartUpdateOneRequiredWithoutItemsInput = {
  create?: Maybe<PartyCartCreateWithoutItemsInput>,
  update?: Maybe<PartyCartUpdateWithoutItemsDataInput>,
  upsert?: Maybe<PartyCartUpsertWithoutItemsInput>,
  connect?: Maybe<PartyCartWhereUniqueInput>,
};

export type PartyCartUpdateOneRequiredWithoutPartyInput = {
  create?: Maybe<PartyCartCreateWithoutPartyInput>,
  update?: Maybe<PartyCartUpdateWithoutPartyDataInput>,
  upsert?: Maybe<PartyCartUpsertWithoutPartyInput>,
  connect?: Maybe<PartyCartWhereUniqueInput>,
};

export type PartyCartUpdateWithoutItemsDataInput = {
  party?: Maybe<PartyUpdateOneRequiredWithoutCartInput>,
};

export type PartyCartUpdateWithoutPartyDataInput = {
  items?: Maybe<PartyCartItemUpdateManyWithoutCartInput>,
};

export type PartyCartUpsertWithoutItemsInput = {
  update: PartyCartUpdateWithoutItemsDataInput,
  create: PartyCartCreateWithoutItemsInput,
};

export type PartyCartUpsertWithoutPartyInput = {
  update: PartyCartUpdateWithoutPartyDataInput,
  create: PartyCartCreateWithoutPartyInput,
};

export type PartyCartWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  party?: Maybe<PartyWhereInput>,
  items_every?: Maybe<PartyCartItemWhereInput>,
  items_some?: Maybe<PartyCartItemWhereInput>,
  items_none?: Maybe<PartyCartItemWhereInput>,
  AND?: Maybe<Array<PartyCartWhereInput>>,
  OR?: Maybe<Array<PartyCartWhereInput>>,
  NOT?: Maybe<Array<PartyCartWhereInput>>,
};

export type PartyCartWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PartyConnection = {
   __typename?: 'PartyConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PartyEdge>>,
  aggregate: AggregateParty,
};

export type PartyCreateInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
};

export type PartyCreateManyWithoutMembersInput = {
  create?: Maybe<Array<PartyCreateWithoutMembersInput>>,
  connect?: Maybe<Array<PartyWhereUniqueInput>>,
};

export type PartyCreateManyWithoutPlaylistInput = {
  create?: Maybe<Array<PartyCreateWithoutPlaylistInput>>,
  connect?: Maybe<Array<PartyWhereUniqueInput>>,
};

export type PartyCreateOneInput = {
  create?: Maybe<PartyCreateInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyCreateOneWithoutCartInput = {
  create?: Maybe<PartyCreateWithoutCartInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyCreateOneWithoutSavedTracksInput = {
  create?: Maybe<PartyCreateWithoutSavedTracksInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyCreateWithoutCartInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
};

export type PartyCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
};

export type PartyCreateWithoutPlaylistInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
};

export type PartyCreateWithoutSavedTracksInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
};

export type PartyEdge = {
   __typename?: 'PartyEdge',
  node: Party,
  cursor: Scalars['String'],
};

export type PartyInvitation = {
   __typename?: 'PartyInvitation',
  id: Scalars['ID'],
  invitedBy: User,
  user: User,
  party: Party,
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
  createdAt: Scalars['DateTime'],
};

export type PartyInvitationConnection = {
   __typename?: 'PartyInvitationConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PartyInvitationEdge>>,
  aggregate: AggregatePartyInvitation,
};

export type PartyInvitationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  invitedBy: UserCreateOneInput,
  user: UserCreateOneWithoutPendingPartyInvitationsInput,
  party: PartyCreateOneInput,
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
};

export type PartyInvitationCreateManyWithoutUserInput = {
  create?: Maybe<Array<PartyInvitationCreateWithoutUserInput>>,
  connect?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
};

export type PartyInvitationCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  invitedBy: UserCreateOneInput,
  party: PartyCreateOneInput,
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
};

export type PartyInvitationEdge = {
   __typename?: 'PartyInvitationEdge',
  node: PartyInvitation,
  cursor: Scalars['String'],
};

export enum PartyInvitationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InvitedUserIdAsc = 'invitedUserId_ASC',
  InvitedUserIdDesc = 'invitedUserId_DESC',
  PartyIdAsc = 'partyId_ASC',
  PartyIdDesc = 'partyId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type PartyInvitationPreviousValues = {
   __typename?: 'PartyInvitationPreviousValues',
  id: Scalars['ID'],
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
  createdAt: Scalars['DateTime'],
};

export type PartyInvitationScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  invitedUserId?: Maybe<Scalars['String']>,
  invitedUserId_not?: Maybe<Scalars['String']>,
  invitedUserId_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_lt?: Maybe<Scalars['String']>,
  invitedUserId_lte?: Maybe<Scalars['String']>,
  invitedUserId_gt?: Maybe<Scalars['String']>,
  invitedUserId_gte?: Maybe<Scalars['String']>,
  invitedUserId_contains?: Maybe<Scalars['String']>,
  invitedUserId_not_contains?: Maybe<Scalars['String']>,
  invitedUserId_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_ends_with?: Maybe<Scalars['String']>,
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
  partyId_not?: Maybe<Scalars['String']>,
  partyId_in?: Maybe<Array<Scalars['String']>>,
  partyId_not_in?: Maybe<Array<Scalars['String']>>,
  partyId_lt?: Maybe<Scalars['String']>,
  partyId_lte?: Maybe<Scalars['String']>,
  partyId_gt?: Maybe<Scalars['String']>,
  partyId_gte?: Maybe<Scalars['String']>,
  partyId_contains?: Maybe<Scalars['String']>,
  partyId_not_contains?: Maybe<Scalars['String']>,
  partyId_starts_with?: Maybe<Scalars['String']>,
  partyId_not_starts_with?: Maybe<Scalars['String']>,
  partyId_ends_with?: Maybe<Scalars['String']>,
  partyId_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<PartyInvitationScalarWhereInput>>,
  OR?: Maybe<Array<PartyInvitationScalarWhereInput>>,
  NOT?: Maybe<Array<PartyInvitationScalarWhereInput>>,
};

export type PartyInvitationSubscriptionPayload = {
   __typename?: 'PartyInvitationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PartyInvitation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartyInvitationPreviousValues>,
};

export type PartyInvitationSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyInvitationWhereInput>,
  AND?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>,
  OR?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>,
};

export type PartyInvitationUpdateInput = {
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutPendingPartyInvitationsInput>,
  party?: Maybe<PartyUpdateOneRequiredInput>,
  invitedUserId?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
};

export type PartyInvitationUpdateManyDataInput = {
  invitedUserId?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
};

export type PartyInvitationUpdateManyMutationInput = {
  invitedUserId?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
};

export type PartyInvitationUpdateManyWithoutUserInput = {
  create?: Maybe<Array<PartyInvitationCreateWithoutUserInput>>,
  delete?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  connect?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  set?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  update?: Maybe<Array<PartyInvitationUpdateWithWhereUniqueWithoutUserInput>>,
  upsert?: Maybe<Array<PartyInvitationUpsertWithWhereUniqueWithoutUserInput>>,
  deleteMany?: Maybe<Array<PartyInvitationScalarWhereInput>>,
  updateMany?: Maybe<Array<PartyInvitationUpdateManyWithWhereNestedInput>>,
};

export type PartyInvitationUpdateManyWithWhereNestedInput = {
  where: PartyInvitationScalarWhereInput,
  data: PartyInvitationUpdateManyDataInput,
};

export type PartyInvitationUpdateWithoutUserDataInput = {
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  party?: Maybe<PartyUpdateOneRequiredInput>,
  invitedUserId?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
};

export type PartyInvitationUpdateWithWhereUniqueWithoutUserInput = {
  where: PartyInvitationWhereUniqueInput,
  data: PartyInvitationUpdateWithoutUserDataInput,
};

export type PartyInvitationUpsertWithWhereUniqueWithoutUserInput = {
  where: PartyInvitationWhereUniqueInput,
  update: PartyInvitationUpdateWithoutUserDataInput,
  create: PartyInvitationCreateWithoutUserInput,
};

export type PartyInvitationWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  invitedBy?: Maybe<UserWhereInput>,
  user?: Maybe<UserWhereInput>,
  party?: Maybe<PartyWhereInput>,
  invitedUserId?: Maybe<Scalars['String']>,
  invitedUserId_not?: Maybe<Scalars['String']>,
  invitedUserId_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>,
  invitedUserId_lt?: Maybe<Scalars['String']>,
  invitedUserId_lte?: Maybe<Scalars['String']>,
  invitedUserId_gt?: Maybe<Scalars['String']>,
  invitedUserId_gte?: Maybe<Scalars['String']>,
  invitedUserId_contains?: Maybe<Scalars['String']>,
  invitedUserId_not_contains?: Maybe<Scalars['String']>,
  invitedUserId_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>,
  invitedUserId_ends_with?: Maybe<Scalars['String']>,
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
  partyId_not?: Maybe<Scalars['String']>,
  partyId_in?: Maybe<Array<Scalars['String']>>,
  partyId_not_in?: Maybe<Array<Scalars['String']>>,
  partyId_lt?: Maybe<Scalars['String']>,
  partyId_lte?: Maybe<Scalars['String']>,
  partyId_gt?: Maybe<Scalars['String']>,
  partyId_gte?: Maybe<Scalars['String']>,
  partyId_contains?: Maybe<Scalars['String']>,
  partyId_not_contains?: Maybe<Scalars['String']>,
  partyId_starts_with?: Maybe<Scalars['String']>,
  partyId_not_starts_with?: Maybe<Scalars['String']>,
  partyId_ends_with?: Maybe<Scalars['String']>,
  partyId_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<PartyInvitationWhereInput>>,
  OR?: Maybe<Array<PartyInvitationWhereInput>>,
  NOT?: Maybe<Array<PartyInvitationWhereInput>>,
};

export type PartyInvitationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum PartyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  NormalizedTitleAsc = 'normalizedTitle_ASC',
  NormalizedTitleDesc = 'normalizedTitle_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ColorTintAsc = 'colorTint_ASC',
  ColorTintDesc = 'colorTint_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  StartAsc = 'start_ASC',
  StartDesc = 'start_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC',
  InviteSecretAsc = 'inviteSecret_ASC',
  InviteSecretDesc = 'inviteSecret_DESC'
}

export type PartyPreviousValues = {
   __typename?: 'PartyPreviousValues',
  id: Scalars['ID'],
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  inviteSecret: Scalars['String'],
};

export type PartySavedTrack = {
   __typename?: 'PartySavedTrack',
  id: Scalars['ID'],
  spotifyId: Scalars['String'],
  durationMs: Scalars['Int'],
  explicit: Scalars['Boolean'],
  name: Scalars['String'],
  previewUrl?: Maybe<Scalars['String']>,
  uri: Scalars['String'],
  party: Party,
  stringArtists: Scalars['String'],
  length: Scalars['String'],
  popularity: Scalars['Int'],
  album: Album,
};

export type PartySavedTrackConnection = {
   __typename?: 'PartySavedTrackConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PartySavedTrackEdge>>,
  aggregate: AggregatePartySavedTrack,
};

export type PartySavedTrackCreateInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['String'],
  durationMs: Scalars['Int'],
  explicit: Scalars['Boolean'],
  name: Scalars['String'],
  previewUrl?: Maybe<Scalars['String']>,
  uri: Scalars['String'],
  party: PartyCreateOneWithoutSavedTracksInput,
  stringArtists: Scalars['String'],
  length: Scalars['String'],
  popularity: Scalars['Int'],
  album: AlbumCreateOneInput,
};

export type PartySavedTrackCreateManyInput = {
  create?: Maybe<Array<PartySavedTrackCreateInput>>,
  connect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
};

export type PartySavedTrackCreateManyWithoutPartyInput = {
  create?: Maybe<Array<PartySavedTrackCreateWithoutPartyInput>>,
  connect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
};

export type PartySavedTrackCreateWithoutPartyInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['String'],
  durationMs: Scalars['Int'],
  explicit: Scalars['Boolean'],
  name: Scalars['String'],
  previewUrl?: Maybe<Scalars['String']>,
  uri: Scalars['String'],
  stringArtists: Scalars['String'],
  length: Scalars['String'],
  popularity: Scalars['Int'],
  album: AlbumCreateOneInput,
};

export type PartySavedTrackEdge = {
   __typename?: 'PartySavedTrackEdge',
  node: PartySavedTrack,
  cursor: Scalars['String'],
};

export enum PartySavedTrackOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpotifyIdAsc = 'spotifyId_ASC',
  SpotifyIdDesc = 'spotifyId_DESC',
  DurationMsAsc = 'durationMs_ASC',
  DurationMsDesc = 'durationMs_DESC',
  ExplicitAsc = 'explicit_ASC',
  ExplicitDesc = 'explicit_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PreviewUrlAsc = 'previewUrl_ASC',
  PreviewUrlDesc = 'previewUrl_DESC',
  UriAsc = 'uri_ASC',
  UriDesc = 'uri_DESC',
  StringArtistsAsc = 'stringArtists_ASC',
  StringArtistsDesc = 'stringArtists_DESC',
  LengthAsc = 'length_ASC',
  LengthDesc = 'length_DESC',
  PopularityAsc = 'popularity_ASC',
  PopularityDesc = 'popularity_DESC'
}

export type PartySavedTrackPreviousValues = {
   __typename?: 'PartySavedTrackPreviousValues',
  id: Scalars['ID'],
  spotifyId: Scalars['String'],
  durationMs: Scalars['Int'],
  explicit: Scalars['Boolean'],
  name: Scalars['String'],
  previewUrl?: Maybe<Scalars['String']>,
  uri: Scalars['String'],
  stringArtists: Scalars['String'],
  length: Scalars['String'],
  popularity: Scalars['Int'],
};

export type PartySavedTrackScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['String']>,
  spotifyId_not?: Maybe<Scalars['String']>,
  spotifyId_in?: Maybe<Array<Scalars['String']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['String']>>,
  spotifyId_lt?: Maybe<Scalars['String']>,
  spotifyId_lte?: Maybe<Scalars['String']>,
  spotifyId_gt?: Maybe<Scalars['String']>,
  spotifyId_gte?: Maybe<Scalars['String']>,
  spotifyId_contains?: Maybe<Scalars['String']>,
  spotifyId_not_contains?: Maybe<Scalars['String']>,
  spotifyId_starts_with?: Maybe<Scalars['String']>,
  spotifyId_not_starts_with?: Maybe<Scalars['String']>,
  spotifyId_ends_with?: Maybe<Scalars['String']>,
  spotifyId_not_ends_with?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  durationMs_not?: Maybe<Scalars['Int']>,
  durationMs_in?: Maybe<Array<Scalars['Int']>>,
  durationMs_not_in?: Maybe<Array<Scalars['Int']>>,
  durationMs_lt?: Maybe<Scalars['Int']>,
  durationMs_lte?: Maybe<Scalars['Int']>,
  durationMs_gt?: Maybe<Scalars['Int']>,
  durationMs_gte?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  explicit_not?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  previewUrl_not?: Maybe<Scalars['String']>,
  previewUrl_in?: Maybe<Array<Scalars['String']>>,
  previewUrl_not_in?: Maybe<Array<Scalars['String']>>,
  previewUrl_lt?: Maybe<Scalars['String']>,
  previewUrl_lte?: Maybe<Scalars['String']>,
  previewUrl_gt?: Maybe<Scalars['String']>,
  previewUrl_gte?: Maybe<Scalars['String']>,
  previewUrl_contains?: Maybe<Scalars['String']>,
  previewUrl_not_contains?: Maybe<Scalars['String']>,
  previewUrl_starts_with?: Maybe<Scalars['String']>,
  previewUrl_not_starts_with?: Maybe<Scalars['String']>,
  previewUrl_ends_with?: Maybe<Scalars['String']>,
  previewUrl_not_ends_with?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  stringArtists_not?: Maybe<Scalars['String']>,
  stringArtists_in?: Maybe<Array<Scalars['String']>>,
  stringArtists_not_in?: Maybe<Array<Scalars['String']>>,
  stringArtists_lt?: Maybe<Scalars['String']>,
  stringArtists_lte?: Maybe<Scalars['String']>,
  stringArtists_gt?: Maybe<Scalars['String']>,
  stringArtists_gte?: Maybe<Scalars['String']>,
  stringArtists_contains?: Maybe<Scalars['String']>,
  stringArtists_not_contains?: Maybe<Scalars['String']>,
  stringArtists_starts_with?: Maybe<Scalars['String']>,
  stringArtists_not_starts_with?: Maybe<Scalars['String']>,
  stringArtists_ends_with?: Maybe<Scalars['String']>,
  stringArtists_not_ends_with?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  length_not?: Maybe<Scalars['String']>,
  length_in?: Maybe<Array<Scalars['String']>>,
  length_not_in?: Maybe<Array<Scalars['String']>>,
  length_lt?: Maybe<Scalars['String']>,
  length_lte?: Maybe<Scalars['String']>,
  length_gt?: Maybe<Scalars['String']>,
  length_gte?: Maybe<Scalars['String']>,
  length_contains?: Maybe<Scalars['String']>,
  length_not_contains?: Maybe<Scalars['String']>,
  length_starts_with?: Maybe<Scalars['String']>,
  length_not_starts_with?: Maybe<Scalars['String']>,
  length_ends_with?: Maybe<Scalars['String']>,
  length_not_ends_with?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  popularity_not?: Maybe<Scalars['Int']>,
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  popularity_lt?: Maybe<Scalars['Int']>,
  popularity_lte?: Maybe<Scalars['Int']>,
  popularity_gt?: Maybe<Scalars['Int']>,
  popularity_gte?: Maybe<Scalars['Int']>,
  AND?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  OR?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  NOT?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
};

export type PartySavedTrackSubscriptionPayload = {
   __typename?: 'PartySavedTrackSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PartySavedTrack>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartySavedTrackPreviousValues>,
};

export type PartySavedTrackSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartySavedTrackWhereInput>,
  AND?: Maybe<Array<PartySavedTrackSubscriptionWhereInput>>,
  OR?: Maybe<Array<PartySavedTrackSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PartySavedTrackSubscriptionWhereInput>>,
};

export type PartySavedTrackUpdateDataInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  party?: Maybe<PartyUpdateOneRequiredWithoutSavedTracksInput>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
};

export type PartySavedTrackUpdateInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  party?: Maybe<PartyUpdateOneRequiredWithoutSavedTracksInput>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
};

export type PartySavedTrackUpdateManyDataInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
};

export type PartySavedTrackUpdateManyInput = {
  create?: Maybe<Array<PartySavedTrackCreateInput>>,
  update?: Maybe<Array<PartySavedTrackUpdateWithWhereUniqueNestedInput>>,
  upsert?: Maybe<Array<PartySavedTrackUpsertWithWhereUniqueNestedInput>>,
  delete?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  connect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  set?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  deleteMany?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  updateMany?: Maybe<Array<PartySavedTrackUpdateManyWithWhereNestedInput>>,
};

export type PartySavedTrackUpdateManyMutationInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
};

export type PartySavedTrackUpdateManyWithoutPartyInput = {
  create?: Maybe<Array<PartySavedTrackCreateWithoutPartyInput>>,
  delete?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  connect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  set?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  update?: Maybe<Array<PartySavedTrackUpdateWithWhereUniqueWithoutPartyInput>>,
  upsert?: Maybe<Array<PartySavedTrackUpsertWithWhereUniqueWithoutPartyInput>>,
  deleteMany?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  updateMany?: Maybe<Array<PartySavedTrackUpdateManyWithWhereNestedInput>>,
};

export type PartySavedTrackUpdateManyWithWhereNestedInput = {
  where: PartySavedTrackScalarWhereInput,
  data: PartySavedTrackUpdateManyDataInput,
};

export type PartySavedTrackUpdateWithoutPartyDataInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
};

export type PartySavedTrackUpdateWithWhereUniqueNestedInput = {
  where: PartySavedTrackWhereUniqueInput,
  data: PartySavedTrackUpdateDataInput,
};

export type PartySavedTrackUpdateWithWhereUniqueWithoutPartyInput = {
  where: PartySavedTrackWhereUniqueInput,
  data: PartySavedTrackUpdateWithoutPartyDataInput,
};

export type PartySavedTrackUpsertWithWhereUniqueNestedInput = {
  where: PartySavedTrackWhereUniqueInput,
  update: PartySavedTrackUpdateDataInput,
  create: PartySavedTrackCreateInput,
};

export type PartySavedTrackUpsertWithWhereUniqueWithoutPartyInput = {
  where: PartySavedTrackWhereUniqueInput,
  update: PartySavedTrackUpdateWithoutPartyDataInput,
  create: PartySavedTrackCreateWithoutPartyInput,
};

export type PartySavedTrackWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['String']>,
  spotifyId_not?: Maybe<Scalars['String']>,
  spotifyId_in?: Maybe<Array<Scalars['String']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['String']>>,
  spotifyId_lt?: Maybe<Scalars['String']>,
  spotifyId_lte?: Maybe<Scalars['String']>,
  spotifyId_gt?: Maybe<Scalars['String']>,
  spotifyId_gte?: Maybe<Scalars['String']>,
  spotifyId_contains?: Maybe<Scalars['String']>,
  spotifyId_not_contains?: Maybe<Scalars['String']>,
  spotifyId_starts_with?: Maybe<Scalars['String']>,
  spotifyId_not_starts_with?: Maybe<Scalars['String']>,
  spotifyId_ends_with?: Maybe<Scalars['String']>,
  spotifyId_not_ends_with?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  durationMs_not?: Maybe<Scalars['Int']>,
  durationMs_in?: Maybe<Array<Scalars['Int']>>,
  durationMs_not_in?: Maybe<Array<Scalars['Int']>>,
  durationMs_lt?: Maybe<Scalars['Int']>,
  durationMs_lte?: Maybe<Scalars['Int']>,
  durationMs_gt?: Maybe<Scalars['Int']>,
  durationMs_gte?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  explicit_not?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  previewUrl_not?: Maybe<Scalars['String']>,
  previewUrl_in?: Maybe<Array<Scalars['String']>>,
  previewUrl_not_in?: Maybe<Array<Scalars['String']>>,
  previewUrl_lt?: Maybe<Scalars['String']>,
  previewUrl_lte?: Maybe<Scalars['String']>,
  previewUrl_gt?: Maybe<Scalars['String']>,
  previewUrl_gte?: Maybe<Scalars['String']>,
  previewUrl_contains?: Maybe<Scalars['String']>,
  previewUrl_not_contains?: Maybe<Scalars['String']>,
  previewUrl_starts_with?: Maybe<Scalars['String']>,
  previewUrl_not_starts_with?: Maybe<Scalars['String']>,
  previewUrl_ends_with?: Maybe<Scalars['String']>,
  previewUrl_not_ends_with?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  party?: Maybe<PartyWhereInput>,
  stringArtists?: Maybe<Scalars['String']>,
  stringArtists_not?: Maybe<Scalars['String']>,
  stringArtists_in?: Maybe<Array<Scalars['String']>>,
  stringArtists_not_in?: Maybe<Array<Scalars['String']>>,
  stringArtists_lt?: Maybe<Scalars['String']>,
  stringArtists_lte?: Maybe<Scalars['String']>,
  stringArtists_gt?: Maybe<Scalars['String']>,
  stringArtists_gte?: Maybe<Scalars['String']>,
  stringArtists_contains?: Maybe<Scalars['String']>,
  stringArtists_not_contains?: Maybe<Scalars['String']>,
  stringArtists_starts_with?: Maybe<Scalars['String']>,
  stringArtists_not_starts_with?: Maybe<Scalars['String']>,
  stringArtists_ends_with?: Maybe<Scalars['String']>,
  stringArtists_not_ends_with?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  length_not?: Maybe<Scalars['String']>,
  length_in?: Maybe<Array<Scalars['String']>>,
  length_not_in?: Maybe<Array<Scalars['String']>>,
  length_lt?: Maybe<Scalars['String']>,
  length_lte?: Maybe<Scalars['String']>,
  length_gt?: Maybe<Scalars['String']>,
  length_gte?: Maybe<Scalars['String']>,
  length_contains?: Maybe<Scalars['String']>,
  length_not_contains?: Maybe<Scalars['String']>,
  length_starts_with?: Maybe<Scalars['String']>,
  length_not_starts_with?: Maybe<Scalars['String']>,
  length_ends_with?: Maybe<Scalars['String']>,
  length_not_ends_with?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  popularity_not?: Maybe<Scalars['Int']>,
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  popularity_lt?: Maybe<Scalars['Int']>,
  popularity_lte?: Maybe<Scalars['Int']>,
  popularity_gt?: Maybe<Scalars['Int']>,
  popularity_gte?: Maybe<Scalars['Int']>,
  album?: Maybe<AlbumWhereInput>,
  AND?: Maybe<Array<PartySavedTrackWhereInput>>,
  OR?: Maybe<Array<PartySavedTrackWhereInput>>,
  NOT?: Maybe<Array<PartySavedTrackWhereInput>>,
};

export type PartySavedTrackWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PartyScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  normalizedTitle_not?: Maybe<Scalars['String']>,
  normalizedTitle_in?: Maybe<Array<Scalars['String']>>,
  normalizedTitle_not_in?: Maybe<Array<Scalars['String']>>,
  normalizedTitle_lt?: Maybe<Scalars['String']>,
  normalizedTitle_lte?: Maybe<Scalars['String']>,
  normalizedTitle_gt?: Maybe<Scalars['String']>,
  normalizedTitle_gte?: Maybe<Scalars['String']>,
  normalizedTitle_contains?: Maybe<Scalars['String']>,
  normalizedTitle_not_contains?: Maybe<Scalars['String']>,
  normalizedTitle_starts_with?: Maybe<Scalars['String']>,
  normalizedTitle_not_starts_with?: Maybe<Scalars['String']>,
  normalizedTitle_ends_with?: Maybe<Scalars['String']>,
  normalizedTitle_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  colorTint?: Maybe<Scalars['String']>,
  colorTint_not?: Maybe<Scalars['String']>,
  colorTint_in?: Maybe<Array<Scalars['String']>>,
  colorTint_not_in?: Maybe<Array<Scalars['String']>>,
  colorTint_lt?: Maybe<Scalars['String']>,
  colorTint_lte?: Maybe<Scalars['String']>,
  colorTint_gt?: Maybe<Scalars['String']>,
  colorTint_gte?: Maybe<Scalars['String']>,
  colorTint_contains?: Maybe<Scalars['String']>,
  colorTint_not_contains?: Maybe<Scalars['String']>,
  colorTint_starts_with?: Maybe<Scalars['String']>,
  colorTint_not_starts_with?: Maybe<Scalars['String']>,
  colorTint_ends_with?: Maybe<Scalars['String']>,
  colorTint_not_ends_with?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  isPublic_not?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  start_not?: Maybe<Scalars['DateTime']>,
  start_in?: Maybe<Array<Scalars['DateTime']>>,
  start_not_in?: Maybe<Array<Scalars['DateTime']>>,
  start_lt?: Maybe<Scalars['DateTime']>,
  start_lte?: Maybe<Scalars['DateTime']>,
  start_gt?: Maybe<Scalars['DateTime']>,
  start_gte?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  end_not?: Maybe<Scalars['DateTime']>,
  end_in?: Maybe<Array<Scalars['DateTime']>>,
  end_not_in?: Maybe<Array<Scalars['DateTime']>>,
  end_lt?: Maybe<Scalars['DateTime']>,
  end_lte?: Maybe<Scalars['DateTime']>,
  end_gt?: Maybe<Scalars['DateTime']>,
  end_gte?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  inviteSecret_not?: Maybe<Scalars['String']>,
  inviteSecret_in?: Maybe<Array<Scalars['String']>>,
  inviteSecret_not_in?: Maybe<Array<Scalars['String']>>,
  inviteSecret_lt?: Maybe<Scalars['String']>,
  inviteSecret_lte?: Maybe<Scalars['String']>,
  inviteSecret_gt?: Maybe<Scalars['String']>,
  inviteSecret_gte?: Maybe<Scalars['String']>,
  inviteSecret_contains?: Maybe<Scalars['String']>,
  inviteSecret_not_contains?: Maybe<Scalars['String']>,
  inviteSecret_starts_with?: Maybe<Scalars['String']>,
  inviteSecret_not_starts_with?: Maybe<Scalars['String']>,
  inviteSecret_ends_with?: Maybe<Scalars['String']>,
  inviteSecret_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<PartyScalarWhereInput>>,
  OR?: Maybe<Array<PartyScalarWhereInput>>,
  NOT?: Maybe<Array<PartyScalarWhereInput>>,
};

export type PartySubscriptionPayload = {
   __typename?: 'PartySubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Party>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartyPreviousValues>,
};

export type PartySubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyWhereInput>,
  AND?: Maybe<Array<PartySubscriptionWhereInput>>,
  OR?: Maybe<Array<PartySubscriptionWhereInput>>,
  NOT?: Maybe<Array<PartySubscriptionWhereInput>>,
};

export type PartyUpdateDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
};

export type PartyUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
};

export type PartyUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<PartyCreateWithoutMembersInput>>,
  delete?: Maybe<Array<PartyWhereUniqueInput>>,
  connect?: Maybe<Array<PartyWhereUniqueInput>>,
  set?: Maybe<Array<PartyWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyWhereUniqueInput>>,
  update?: Maybe<Array<PartyUpdateWithWhereUniqueWithoutMembersInput>>,
  upsert?: Maybe<Array<PartyUpsertWithWhereUniqueWithoutMembersInput>>,
  deleteMany?: Maybe<Array<PartyScalarWhereInput>>,
  updateMany?: Maybe<Array<PartyUpdateManyWithWhereNestedInput>>,
};

export type PartyUpdateManyWithoutPlaylistInput = {
  create?: Maybe<Array<PartyCreateWithoutPlaylistInput>>,
  delete?: Maybe<Array<PartyWhereUniqueInput>>,
  connect?: Maybe<Array<PartyWhereUniqueInput>>,
  set?: Maybe<Array<PartyWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyWhereUniqueInput>>,
  update?: Maybe<Array<PartyUpdateWithWhereUniqueWithoutPlaylistInput>>,
  upsert?: Maybe<Array<PartyUpsertWithWhereUniqueWithoutPlaylistInput>>,
  deleteMany?: Maybe<Array<PartyScalarWhereInput>>,
  updateMany?: Maybe<Array<PartyUpdateManyWithWhereNestedInput>>,
};

export type PartyUpdateManyWithWhereNestedInput = {
  where: PartyScalarWhereInput,
  data: PartyUpdateManyDataInput,
};

export type PartyUpdateOneRequiredInput = {
  create?: Maybe<PartyCreateInput>,
  update?: Maybe<PartyUpdateDataInput>,
  upsert?: Maybe<PartyUpsertNestedInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyUpdateOneRequiredWithoutCartInput = {
  create?: Maybe<PartyCreateWithoutCartInput>,
  update?: Maybe<PartyUpdateWithoutCartDataInput>,
  upsert?: Maybe<PartyUpsertWithoutCartInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyUpdateOneRequiredWithoutSavedTracksInput = {
  create?: Maybe<PartyCreateWithoutSavedTracksInput>,
  update?: Maybe<PartyUpdateWithoutSavedTracksDataInput>,
  upsert?: Maybe<PartyUpsertWithoutSavedTracksInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
};

export type PartyUpdateWithoutCartDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
};

export type PartyUpdateWithoutMembersDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateWithoutPlaylistDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateWithoutSavedTracksDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateWithWhereUniqueWithoutMembersInput = {
  where: PartyWhereUniqueInput,
  data: PartyUpdateWithoutMembersDataInput,
};

export type PartyUpdateWithWhereUniqueWithoutPlaylistInput = {
  where: PartyWhereUniqueInput,
  data: PartyUpdateWithoutPlaylistDataInput,
};

export type PartyUpsertNestedInput = {
  update: PartyUpdateDataInput,
  create: PartyCreateInput,
};

export type PartyUpsertWithoutCartInput = {
  update: PartyUpdateWithoutCartDataInput,
  create: PartyCreateWithoutCartInput,
};

export type PartyUpsertWithoutSavedTracksInput = {
  update: PartyUpdateWithoutSavedTracksDataInput,
  create: PartyCreateWithoutSavedTracksInput,
};

export type PartyUpsertWithWhereUniqueWithoutMembersInput = {
  where: PartyWhereUniqueInput,
  update: PartyUpdateWithoutMembersDataInput,
  create: PartyCreateWithoutMembersInput,
};

export type PartyUpsertWithWhereUniqueWithoutPlaylistInput = {
  where: PartyWhereUniqueInput,
  update: PartyUpdateWithoutPlaylistDataInput,
  create: PartyCreateWithoutPlaylistInput,
};

export type PartyUserInviteInput = {
   __typename?: 'PartyUserInviteInput',
  inviteSecret: Scalars['String'],
  user: User,
};

export type PartyWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  normalizedTitle_not?: Maybe<Scalars['String']>,
  normalizedTitle_in?: Maybe<Array<Scalars['String']>>,
  normalizedTitle_not_in?: Maybe<Array<Scalars['String']>>,
  normalizedTitle_lt?: Maybe<Scalars['String']>,
  normalizedTitle_lte?: Maybe<Scalars['String']>,
  normalizedTitle_gt?: Maybe<Scalars['String']>,
  normalizedTitle_gte?: Maybe<Scalars['String']>,
  normalizedTitle_contains?: Maybe<Scalars['String']>,
  normalizedTitle_not_contains?: Maybe<Scalars['String']>,
  normalizedTitle_starts_with?: Maybe<Scalars['String']>,
  normalizedTitle_not_starts_with?: Maybe<Scalars['String']>,
  normalizedTitle_ends_with?: Maybe<Scalars['String']>,
  normalizedTitle_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  author?: Maybe<UserWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  location?: Maybe<LocationWhereInput>,
  colorTint?: Maybe<Scalars['String']>,
  colorTint_not?: Maybe<Scalars['String']>,
  colorTint_in?: Maybe<Array<Scalars['String']>>,
  colorTint_not_in?: Maybe<Array<Scalars['String']>>,
  colorTint_lt?: Maybe<Scalars['String']>,
  colorTint_lte?: Maybe<Scalars['String']>,
  colorTint_gt?: Maybe<Scalars['String']>,
  colorTint_gte?: Maybe<Scalars['String']>,
  colorTint_contains?: Maybe<Scalars['String']>,
  colorTint_not_contains?: Maybe<Scalars['String']>,
  colorTint_starts_with?: Maybe<Scalars['String']>,
  colorTint_not_starts_with?: Maybe<Scalars['String']>,
  colorTint_ends_with?: Maybe<Scalars['String']>,
  colorTint_not_ends_with?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  isPublic_not?: Maybe<Scalars['Boolean']>,
  members_every?: Maybe<UserWhereInput>,
  members_some?: Maybe<UserWhereInput>,
  members_none?: Maybe<UserWhereInput>,
  start?: Maybe<Scalars['DateTime']>,
  start_not?: Maybe<Scalars['DateTime']>,
  start_in?: Maybe<Array<Scalars['DateTime']>>,
  start_not_in?: Maybe<Array<Scalars['DateTime']>>,
  start_lt?: Maybe<Scalars['DateTime']>,
  start_lte?: Maybe<Scalars['DateTime']>,
  start_gt?: Maybe<Scalars['DateTime']>,
  start_gte?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  end_not?: Maybe<Scalars['DateTime']>,
  end_in?: Maybe<Array<Scalars['DateTime']>>,
  end_not_in?: Maybe<Array<Scalars['DateTime']>>,
  end_lt?: Maybe<Scalars['DateTime']>,
  end_lte?: Maybe<Scalars['DateTime']>,
  end_gt?: Maybe<Scalars['DateTime']>,
  end_gte?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  inviteSecret_not?: Maybe<Scalars['String']>,
  inviteSecret_in?: Maybe<Array<Scalars['String']>>,
  inviteSecret_not_in?: Maybe<Array<Scalars['String']>>,
  inviteSecret_lt?: Maybe<Scalars['String']>,
  inviteSecret_lte?: Maybe<Scalars['String']>,
  inviteSecret_gt?: Maybe<Scalars['String']>,
  inviteSecret_gte?: Maybe<Scalars['String']>,
  inviteSecret_contains?: Maybe<Scalars['String']>,
  inviteSecret_not_contains?: Maybe<Scalars['String']>,
  inviteSecret_starts_with?: Maybe<Scalars['String']>,
  inviteSecret_not_starts_with?: Maybe<Scalars['String']>,
  inviteSecret_ends_with?: Maybe<Scalars['String']>,
  inviteSecret_not_ends_with?: Maybe<Scalars['String']>,
  playlist_every?: Maybe<PlaylistWhereInput>,
  playlist_some?: Maybe<PlaylistWhereInput>,
  playlist_none?: Maybe<PlaylistWhereInput>,
  savedTracks_every?: Maybe<PartySavedTrackWhereInput>,
  savedTracks_some?: Maybe<PartySavedTrackWhereInput>,
  savedTracks_none?: Maybe<PartySavedTrackWhereInput>,
  cart?: Maybe<PartyCartWhereInput>,
  AND?: Maybe<Array<PartyWhereInput>>,
  OR?: Maybe<Array<PartyWhereInput>>,
  NOT?: Maybe<Array<PartyWhereInput>>,
};

export type PartyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  inviteSecret?: Maybe<Scalars['String']>,
};

export type Playlist = {
   __typename?: 'Playlist',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  uri: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
  user: User,
  parties?: Maybe<Array<Party>>,
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  tracks?: Maybe<Array<PartySavedTrack>>,
  importable: Scalars['Boolean'],
};


export type PlaylistPartiesArgs = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PlaylistTracksArgs = {
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PlaylistConnection = {
   __typename?: 'PlaylistConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PlaylistEdge>>,
  aggregate: AggregatePlaylist,
};

export type PlaylistCreateInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
  user: UserCreateOneInput,
  parties?: Maybe<PartyCreateManyWithoutPlaylistInput>,
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  tracks?: Maybe<PartySavedTrackCreateManyInput>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistCreateManyWithoutPartiesInput = {
  create?: Maybe<Array<PlaylistCreateWithoutPartiesInput>>,
  connect?: Maybe<Array<PlaylistWhereUniqueInput>>,
};

export type PlaylistCreateWithoutPartiesInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
  user: UserCreateOneInput,
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  tracks?: Maybe<PartySavedTrackCreateManyInput>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistEdge = {
   __typename?: 'PlaylistEdge',
  node: Playlist,
  cursor: Scalars['String'],
};

export enum PlaylistOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpotifyIdAsc = 'spotifyId_ASC',
  SpotifyIdDesc = 'spotifyId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UriAsc = 'uri_ASC',
  UriDesc = 'uri_DESC',
  SpotifyExternalUrlAsc = 'spotifyExternalUrl_ASC',
  SpotifyExternalUrlDesc = 'spotifyExternalUrl_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ImageUrlAsc = 'imageUrl_ASC',
  ImageUrlDesc = 'imageUrl_DESC',
  ImportableAsc = 'importable_ASC',
  ImportableDesc = 'importable_DESC'
}

export type PlaylistPreviousValues = {
   __typename?: 'PlaylistPreviousValues',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  uri: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  importable: Scalars['Boolean'],
};

export type PlaylistScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
  spotifyId_not?: Maybe<Scalars['ID']>,
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_lt?: Maybe<Scalars['ID']>,
  spotifyId_lte?: Maybe<Scalars['ID']>,
  spotifyId_gt?: Maybe<Scalars['ID']>,
  spotifyId_gte?: Maybe<Scalars['ID']>,
  spotifyId_contains?: Maybe<Scalars['ID']>,
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not?: Maybe<Scalars['String']>,
  spotifyExternalUrl_in?: Maybe<Array<Scalars['String']>>,
  spotifyExternalUrl_not_in?: Maybe<Array<Scalars['String']>>,
  spotifyExternalUrl_lt?: Maybe<Scalars['String']>,
  spotifyExternalUrl_lte?: Maybe<Scalars['String']>,
  spotifyExternalUrl_gt?: Maybe<Scalars['String']>,
  spotifyExternalUrl_gte?: Maybe<Scalars['String']>,
  spotifyExternalUrl_contains?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_contains?: Maybe<Scalars['String']>,
  spotifyExternalUrl_starts_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_starts_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_ends_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  imageUrl_not?: Maybe<Scalars['String']>,
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_lt?: Maybe<Scalars['String']>,
  imageUrl_lte?: Maybe<Scalars['String']>,
  imageUrl_gt?: Maybe<Scalars['String']>,
  imageUrl_gte?: Maybe<Scalars['String']>,
  imageUrl_contains?: Maybe<Scalars['String']>,
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
  importable?: Maybe<Scalars['Boolean']>,
  importable_not?: Maybe<Scalars['Boolean']>,
  AND?: Maybe<Array<PlaylistScalarWhereInput>>,
  OR?: Maybe<Array<PlaylistScalarWhereInput>>,
  NOT?: Maybe<Array<PlaylistScalarWhereInput>>,
};

export type PlaylistSubscriptionPayload = {
   __typename?: 'PlaylistSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Playlist>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PlaylistPreviousValues>,
};

export type PlaylistSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PlaylistWhereInput>,
  AND?: Maybe<Array<PlaylistSubscriptionWhereInput>>,
  OR?: Maybe<Array<PlaylistSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PlaylistSubscriptionWhereInput>>,
};

export type PlaylistUpdateInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  parties?: Maybe<PartyUpdateManyWithoutPlaylistInput>,
  name?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  tracks?: Maybe<PartySavedTrackUpdateManyInput>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpdateManyDataInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpdateManyMutationInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpdateManyWithoutPartiesInput = {
  create?: Maybe<Array<PlaylistCreateWithoutPartiesInput>>,
  delete?: Maybe<Array<PlaylistWhereUniqueInput>>,
  connect?: Maybe<Array<PlaylistWhereUniqueInput>>,
  set?: Maybe<Array<PlaylistWhereUniqueInput>>,
  disconnect?: Maybe<Array<PlaylistWhereUniqueInput>>,
  update?: Maybe<Array<PlaylistUpdateWithWhereUniqueWithoutPartiesInput>>,
  upsert?: Maybe<Array<PlaylistUpsertWithWhereUniqueWithoutPartiesInput>>,
  deleteMany?: Maybe<Array<PlaylistScalarWhereInput>>,
  updateMany?: Maybe<Array<PlaylistUpdateManyWithWhereNestedInput>>,
};

export type PlaylistUpdateManyWithWhereNestedInput = {
  where: PlaylistScalarWhereInput,
  data: PlaylistUpdateManyDataInput,
};

export type PlaylistUpdateWithoutPartiesDataInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  name?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  tracks?: Maybe<PartySavedTrackUpdateManyInput>,
  importable?: Maybe<Scalars['Boolean']>,
};

export type PlaylistUpdateWithWhereUniqueWithoutPartiesInput = {
  where: PlaylistWhereUniqueInput,
  data: PlaylistUpdateWithoutPartiesDataInput,
};

export type PlaylistUpsertWithWhereUniqueWithoutPartiesInput = {
  where: PlaylistWhereUniqueInput,
  update: PlaylistUpdateWithoutPartiesDataInput,
  create: PlaylistCreateWithoutPartiesInput,
};

export type PlaylistWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
  spotifyId_not?: Maybe<Scalars['ID']>,
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  spotifyId_lt?: Maybe<Scalars['ID']>,
  spotifyId_lte?: Maybe<Scalars['ID']>,
  spotifyId_gt?: Maybe<Scalars['ID']>,
  spotifyId_gte?: Maybe<Scalars['ID']>,
  spotifyId_contains?: Maybe<Scalars['ID']>,
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  uri?: Maybe<Scalars['String']>,
  uri_not?: Maybe<Scalars['String']>,
  uri_in?: Maybe<Array<Scalars['String']>>,
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  uri_lt?: Maybe<Scalars['String']>,
  uri_lte?: Maybe<Scalars['String']>,
  uri_gt?: Maybe<Scalars['String']>,
  uri_gte?: Maybe<Scalars['String']>,
  uri_contains?: Maybe<Scalars['String']>,
  uri_not_contains?: Maybe<Scalars['String']>,
  uri_starts_with?: Maybe<Scalars['String']>,
  uri_not_starts_with?: Maybe<Scalars['String']>,
  uri_ends_with?: Maybe<Scalars['String']>,
  uri_not_ends_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not?: Maybe<Scalars['String']>,
  spotifyExternalUrl_in?: Maybe<Array<Scalars['String']>>,
  spotifyExternalUrl_not_in?: Maybe<Array<Scalars['String']>>,
  spotifyExternalUrl_lt?: Maybe<Scalars['String']>,
  spotifyExternalUrl_lte?: Maybe<Scalars['String']>,
  spotifyExternalUrl_gt?: Maybe<Scalars['String']>,
  spotifyExternalUrl_gte?: Maybe<Scalars['String']>,
  spotifyExternalUrl_contains?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_contains?: Maybe<Scalars['String']>,
  spotifyExternalUrl_starts_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_starts_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_ends_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl_not_ends_with?: Maybe<Scalars['String']>,
  user?: Maybe<UserWhereInput>,
  parties_every?: Maybe<PartyWhereInput>,
  parties_some?: Maybe<PartyWhereInput>,
  parties_none?: Maybe<PartyWhereInput>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  imageUrl_not?: Maybe<Scalars['String']>,
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  imageUrl_lt?: Maybe<Scalars['String']>,
  imageUrl_lte?: Maybe<Scalars['String']>,
  imageUrl_gt?: Maybe<Scalars['String']>,
  imageUrl_gte?: Maybe<Scalars['String']>,
  imageUrl_contains?: Maybe<Scalars['String']>,
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
  tracks_every?: Maybe<PartySavedTrackWhereInput>,
  tracks_some?: Maybe<PartySavedTrackWhereInput>,
  tracks_none?: Maybe<PartySavedTrackWhereInput>,
  importable?: Maybe<Scalars['Boolean']>,
  importable_not?: Maybe<Scalars['Boolean']>,
  AND?: Maybe<Array<PlaylistWhereInput>>,
  OR?: Maybe<Array<PlaylistWhereInput>>,
  NOT?: Maybe<Array<PlaylistWhereInput>>,
};

export type PlaylistWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
};

export enum PushNotificationScope {
  PartyInvites = 'PARTY_INVITES',
  FriendInvites = 'FRIEND_INVITES'
}

export type Query = {
   __typename?: 'Query',
  album?: Maybe<Album>,
  albums: Array<Maybe<Album>>,
  albumsConnection: AlbumConnection,
  artist?: Maybe<Artist>,
  artists: Array<Maybe<Artist>>,
  artistsConnection: ArtistConnection,
  chat?: Maybe<Chat>,
  chats: Array<Maybe<Chat>>,
  chatsConnection: ChatConnection,
  friendInvitation?: Maybe<FriendInvitation>,
  friendInvitations: Array<Maybe<FriendInvitation>>,
  friendInvitationsConnection: FriendInvitationConnection,
  location?: Maybe<Location>,
  locations: Array<Maybe<Location>>,
  locationsConnection: LocationConnection,
  message?: Maybe<Message>,
  messages: Array<Maybe<Message>>,
  messagesConnection: MessageConnection,
  party?: Maybe<Party>,
  parties: Array<Maybe<Party>>,
  partiesConnection: PartyConnection,
  partyCart?: Maybe<PartyCart>,
  partyCarts: Array<Maybe<PartyCart>>,
  partyCartsConnection: PartyCartConnection,
  partyCartItem?: Maybe<PartyCartItem>,
  partyCartItems: Array<Maybe<PartyCartItem>>,
  partyCartItemsConnection: PartyCartItemConnection,
  partyInvitation?: Maybe<PartyInvitation>,
  partyInvitations: Array<Maybe<PartyInvitation>>,
  partyInvitationsConnection: PartyInvitationConnection,
  partySavedTrack?: Maybe<PartySavedTrack>,
  partySavedTracks: Array<Maybe<PartySavedTrack>>,
  partySavedTracksConnection: PartySavedTrackConnection,
  playlist?: Maybe<Playlist>,
  playlists: Array<Maybe<Playlist>>,
  playlistsConnection: PlaylistConnection,
  track?: Maybe<Track>,
  tracks: Array<Maybe<Track>>,
  tracksConnection: TrackConnection,
  user?: Maybe<User>,
  users: Array<Maybe<User>>,
  usersConnection: UserConnection,
  node?: Maybe<Node>,
  authenticateParty: PartyAuthenticationResult,
  hasChats: Scalars['Boolean'],
  hasParties: Scalars['Boolean'],
  canJoinParty?: Maybe<Scalars['Boolean']>,
  partyCartCost: Scalars['Float'],
  me?: Maybe<User>,
  getUsers: Array<Maybe<User>>,
  userFriends: UserFriends,
  paginateUsers: UserConnection,
  temp__?: Maybe<Scalars['Boolean']>,
};


export type QueryAlbumArgs = {
  where: AlbumWhereUniqueInput
};


export type QueryAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>,
  orderBy?: Maybe<AlbumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAlbumsConnectionArgs = {
  where?: Maybe<AlbumWhereInput>,
  orderBy?: Maybe<AlbumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryArtistArgs = {
  where: ArtistWhereUniqueInput
};


export type QueryArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryArtistsConnectionArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryChatArgs = {
  where: ChatWhereUniqueInput
};


export type QueryChatsArgs = {
  where?: Maybe<ChatWhereInput>,
  orderBy?: Maybe<ChatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryChatsConnectionArgs = {
  where?: Maybe<ChatWhereInput>,
  orderBy?: Maybe<ChatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFriendInvitationArgs = {
  where: FriendInvitationWhereUniqueInput
};


export type QueryFriendInvitationsArgs = {
  where?: Maybe<FriendInvitationWhereInput>,
  orderBy?: Maybe<FriendInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFriendInvitationsConnectionArgs = {
  where?: Maybe<FriendInvitationWhereInput>,
  orderBy?: Maybe<FriendInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput
};


export type QueryLocationsArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryLocationsConnectionArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput
};


export type QueryMessagesArgs = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMessagesConnectionArgs = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyArgs = {
  where: PartyWhereUniqueInput
};


export type QueryPartiesArgs = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartiesConnectionArgs = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyCartArgs = {
  where: PartyCartWhereUniqueInput
};


export type QueryPartyCartsArgs = {
  where?: Maybe<PartyCartWhereInput>,
  orderBy?: Maybe<PartyCartOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyCartsConnectionArgs = {
  where?: Maybe<PartyCartWhereInput>,
  orderBy?: Maybe<PartyCartOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyCartItemArgs = {
  where: PartyCartItemWhereUniqueInput
};


export type QueryPartyCartItemsArgs = {
  where?: Maybe<PartyCartItemWhereInput>,
  orderBy?: Maybe<PartyCartItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyCartItemsConnectionArgs = {
  where?: Maybe<PartyCartItemWhereInput>,
  orderBy?: Maybe<PartyCartItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput
};


export type QueryPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartyInvitationsConnectionArgs = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartySavedTrackArgs = {
  where: PartySavedTrackWhereUniqueInput
};


export type QueryPartySavedTracksArgs = {
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPartySavedTracksConnectionArgs = {
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPlaylistArgs = {
  where: PlaylistWhereUniqueInput
};


export type QueryPlaylistsArgs = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPlaylistsConnectionArgs = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTrackArgs = {
  where: TrackWhereUniqueInput
};


export type QueryTracksArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTracksConnectionArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};


export type QueryAuthenticatePartyArgs = {
  partyId: Scalars['ID']
};


export type QueryHasChatsArgs = {
  where?: Maybe<ChatWhereInput>
};


export type QueryHasPartiesArgs = {
  where?: Maybe<PartyWhereInput>
};


export type QueryCanJoinPartyArgs = {
  userId: Scalars['String'],
  inviteSecret: Scalars['String'],
  partyId: Scalars['String']
};


export type QueryPartyCartCostArgs = {
  id: Scalars['ID']
};


export type QueryGetUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserFriendsArgs = {
  userId: Scalars['ID']
};


export type QueryPaginateUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum SocialMediaType {
  Facebook = 'FACEBOOK',
  Spotify = 'SPOTIFY',
  Twitter = 'TWITTER'
}

export type Subscription = {
   __typename?: 'Subscription',
  album?: Maybe<AlbumSubscriptionPayload>,
  artist?: Maybe<ArtistSubscriptionPayload>,
  chat?: Maybe<ChatSubscriptionPayload>,
  friendInvitation?: Maybe<FriendInvitationSubscriptionPayload>,
  location?: Maybe<LocationSubscriptionPayload>,
  message?: Maybe<MessageSubscriptionPayload>,
  party?: Maybe<PartySubscriptionPayload>,
  partyCart?: Maybe<PartyCartSubscriptionPayload>,
  partyCartItem?: Maybe<PartyCartItemSubscriptionPayload>,
  partyInvitation?: Maybe<PartyInvitationSubscriptionPayload>,
  partySavedTrack?: Maybe<PartySavedTrackSubscriptionPayload>,
  playlist?: Maybe<PlaylistSubscriptionPayload>,
  track?: Maybe<TrackSubscriptionPayload>,
  user?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionAlbumArgs = {
  where?: Maybe<AlbumSubscriptionWhereInput>
};


export type SubscriptionArtistArgs = {
  where?: Maybe<ArtistSubscriptionWhereInput>
};


export type SubscriptionChatArgs = {
  where?: Maybe<ChatSubscriptionWhereInput>
};


export type SubscriptionFriendInvitationArgs = {
  where?: Maybe<FriendInvitationSubscriptionWhereInput>
};


export type SubscriptionLocationArgs = {
  where?: Maybe<LocationSubscriptionWhereInput>
};


export type SubscriptionMessageArgs = {
  where?: Maybe<MessageSubscriptionWhereInput>
};


export type SubscriptionPartyArgs = {
  where?: Maybe<PartySubscriptionWhereInput>
};


export type SubscriptionPartyCartArgs = {
  where?: Maybe<PartyCartSubscriptionWhereInput>
};


export type SubscriptionPartyCartItemArgs = {
  where?: Maybe<PartyCartItemSubscriptionWhereInput>
};


export type SubscriptionPartyInvitationArgs = {
  where?: Maybe<PartyInvitationSubscriptionWhereInput>
};


export type SubscriptionPartySavedTrackArgs = {
  where?: Maybe<PartySavedTrackSubscriptionWhereInput>
};


export type SubscriptionPlaylistArgs = {
  where?: Maybe<PlaylistSubscriptionWhereInput>
};


export type SubscriptionTrackArgs = {
  where?: Maybe<TrackSubscriptionWhereInput>
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};

export type SuccessMessage = {
   __typename?: 'SuccessMessage',
  message: Scalars['String'],
};

export type Track = {
   __typename?: 'Track',
  id: Scalars['ID'],
  name: Scalars['String'],
  album: Album,
  artists?: Maybe<Array<Artist>>,
  duration: Scalars['Int'],
  preview_url?: Maybe<Scalars['String']>,
};


export type TrackArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type TrackConnection = {
   __typename?: 'TrackConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TrackEdge>>,
  aggregate: AggregateTrack,
};

export type TrackCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  album: AlbumCreateOneInput,
  artists?: Maybe<ArtistCreateManyInput>,
  duration: Scalars['Int'],
  preview_url?: Maybe<Scalars['String']>,
};

export type TrackEdge = {
   __typename?: 'TrackEdge',
  node: Track,
  cursor: Scalars['String'],
};

export enum TrackOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  PreviewUrlAsc = 'preview_url_ASC',
  PreviewUrlDesc = 'preview_url_DESC'
}

export type TrackPreviousValues = {
   __typename?: 'TrackPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  duration: Scalars['Int'],
  preview_url?: Maybe<Scalars['String']>,
};

export type TrackSubscriptionPayload = {
   __typename?: 'TrackSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Track>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<TrackPreviousValues>,
};

export type TrackSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TrackWhereInput>,
  AND?: Maybe<Array<TrackSubscriptionWhereInput>>,
  OR?: Maybe<Array<TrackSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TrackSubscriptionWhereInput>>,
};

export type TrackUpdateInput = {
  name?: Maybe<Scalars['String']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
  artists?: Maybe<ArtistUpdateManyInput>,
  duration?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
};

export type TrackUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
};

export type TrackWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  album?: Maybe<AlbumWhereInput>,
  artists_every?: Maybe<ArtistWhereInput>,
  artists_some?: Maybe<ArtistWhereInput>,
  artists_none?: Maybe<ArtistWhereInput>,
  duration?: Maybe<Scalars['Int']>,
  duration_not?: Maybe<Scalars['Int']>,
  duration_in?: Maybe<Array<Scalars['Int']>>,
  duration_not_in?: Maybe<Array<Scalars['Int']>>,
  duration_lt?: Maybe<Scalars['Int']>,
  duration_lte?: Maybe<Scalars['Int']>,
  duration_gt?: Maybe<Scalars['Int']>,
  duration_gte?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
  preview_url_not?: Maybe<Scalars['String']>,
  preview_url_in?: Maybe<Array<Scalars['String']>>,
  preview_url_not_in?: Maybe<Array<Scalars['String']>>,
  preview_url_lt?: Maybe<Scalars['String']>,
  preview_url_lte?: Maybe<Scalars['String']>,
  preview_url_gt?: Maybe<Scalars['String']>,
  preview_url_gte?: Maybe<Scalars['String']>,
  preview_url_contains?: Maybe<Scalars['String']>,
  preview_url_not_contains?: Maybe<Scalars['String']>,
  preview_url_starts_with?: Maybe<Scalars['String']>,
  preview_url_not_starts_with?: Maybe<Scalars['String']>,
  preview_url_ends_with?: Maybe<Scalars['String']>,
  preview_url_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<TrackWhereInput>>,
  OR?: Maybe<Array<TrackWhereInput>>,
  NOT?: Maybe<Array<TrackWhereInput>>,
};

export type TrackWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type User = {
   __typename?: 'User',
  status: UserStatus,
  id: Scalars['ID'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<Array<Party>>,
  friends?: Maybe<Array<User>>,
  pendingFriendInvitations?: Maybe<Array<FriendInvitation>>,
  pendingPartyInvitations?: Maybe<Array<PartyInvitation>>,
  chats?: Maybe<Array<Chat>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted: Scalars['Boolean'],
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate: Scalars['Boolean'],
  cartItems?: Maybe<Array<PartyCartItem>>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes: Array<PushNotificationScope>,
  pendingInvitations?: Maybe<Array<User>>,
};


export type UserPartiesArgs = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserFriendsArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserPendingFriendInvitationsArgs = {
  where?: Maybe<FriendInvitationWhereInput>,
  orderBy?: Maybe<FriendInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserPendingPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserChatsArgs = {
  where?: Maybe<ChatWhereInput>,
  orderBy?: Maybe<ChatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserCartItemsArgs = {
  where?: Maybe<PartyCartItemWhereInput>,
  orderBy?: Maybe<PartyCartItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserPendingInvitationsArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserConnection = {
   __typename?: 'UserConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserCreateManyWithoutChatsInput = {
  create?: Maybe<Array<UserCreateWithoutChatsInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateManyWithoutFriendsInput = {
  create?: Maybe<Array<UserCreateWithoutFriendsInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateManyWithoutPartiesInput = {
  create?: Maybe<Array<UserCreateWithoutPartiesInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutCartItemsInput = {
  create?: Maybe<UserCreateWithoutCartItemsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutPendingFriendInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingFriendInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutPendingPartyInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingPartyInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreatepushNotificationsScopesInput = {
  set?: Maybe<Array<PushNotificationScope>>,
};

export type UserCreateWithoutCartItemsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserCreateWithoutChatsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserCreateWithoutFriendsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserCreateWithoutPartiesInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserCreateWithoutPendingFriendInvitationsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserCreateWithoutPendingPartyInvitationsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserCreatepushNotificationsScopesInput>,
};

export type UserEdge = {
   __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export type UserFriends = {
   __typename?: 'UserFriends',
  current: Array<Scalars['String']>,
  pending: Array<UserPendingFriend>,
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  LastOnlineAsc = 'lastOnline_ASC',
  LastOnlineDesc = 'lastOnline_DESC',
  DeletedAsc = 'deleted_ASC',
  DeletedDesc = 'deleted_DESC',
  ProviderAsc = 'provider_ASC',
  ProviderDesc = 'provider_DESC',
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  ThirdPartyIdAsc = 'thirdPartyId_ASC',
  ThirdPartyIdDesc = 'thirdPartyId_DESC',
  ResetTokenAsc = 'resetToken_ASC',
  ResetTokenDesc = 'resetToken_DESC',
  ResetTokenExpiryAsc = 'resetTokenExpiry_ASC',
  ResetTokenExpiryDesc = 'resetTokenExpiry_DESC',
  IsPrivateAsc = 'isPrivate_ASC',
  IsPrivateDesc = 'isPrivate_DESC',
  WebPushNotificationTokenAsc = 'webPushNotificationToken_ASC',
  WebPushNotificationTokenDesc = 'webPushNotificationToken_DESC',
  AppPushNotificationTokenAsc = 'appPushNotificationToken_ASC',
  AppPushNotificationTokenDesc = 'appPushNotificationToken_DESC'
}

export type UserPendingFriend = {
   __typename?: 'UserPendingFriend',
  id: Scalars['String'],
  invitedUserId: Scalars['String'],
};

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues',
  id: Scalars['ID'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted: Scalars['Boolean'],
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate: Scalars['Boolean'],
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes: Array<PushNotificationScope>,
};

export type UserScalarWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  lastOnline_not?: Maybe<Scalars['DateTime']>,
  lastOnline_in?: Maybe<Array<Scalars['DateTime']>>,
  lastOnline_not_in?: Maybe<Array<Scalars['DateTime']>>,
  lastOnline_lt?: Maybe<Scalars['DateTime']>,
  lastOnline_lte?: Maybe<Scalars['DateTime']>,
  lastOnline_gt?: Maybe<Scalars['DateTime']>,
  lastOnline_gte?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  deleted_not?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  provider_not?: Maybe<SocialMediaType>,
  provider_in?: Maybe<Array<SocialMediaType>>,
  provider_not_in?: Maybe<Array<SocialMediaType>>,
  avatar?: Maybe<Scalars['String']>,
  avatar_not?: Maybe<Scalars['String']>,
  avatar_in?: Maybe<Array<Scalars['String']>>,
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  avatar_lt?: Maybe<Scalars['String']>,
  avatar_lte?: Maybe<Scalars['String']>,
  avatar_gt?: Maybe<Scalars['String']>,
  avatar_gte?: Maybe<Scalars['String']>,
  avatar_contains?: Maybe<Scalars['String']>,
  avatar_not_contains?: Maybe<Scalars['String']>,
  avatar_starts_with?: Maybe<Scalars['String']>,
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  avatar_ends_with?: Maybe<Scalars['String']>,
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  thirdPartyId_not?: Maybe<Scalars['String']>,
  thirdPartyId_in?: Maybe<Array<Scalars['String']>>,
  thirdPartyId_not_in?: Maybe<Array<Scalars['String']>>,
  thirdPartyId_lt?: Maybe<Scalars['String']>,
  thirdPartyId_lte?: Maybe<Scalars['String']>,
  thirdPartyId_gt?: Maybe<Scalars['String']>,
  thirdPartyId_gte?: Maybe<Scalars['String']>,
  thirdPartyId_contains?: Maybe<Scalars['String']>,
  thirdPartyId_not_contains?: Maybe<Scalars['String']>,
  thirdPartyId_starts_with?: Maybe<Scalars['String']>,
  thirdPartyId_not_starts_with?: Maybe<Scalars['String']>,
  thirdPartyId_ends_with?: Maybe<Scalars['String']>,
  thirdPartyId_not_ends_with?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetToken_not?: Maybe<Scalars['String']>,
  resetToken_in?: Maybe<Array<Scalars['String']>>,
  resetToken_not_in?: Maybe<Array<Scalars['String']>>,
  resetToken_lt?: Maybe<Scalars['String']>,
  resetToken_lte?: Maybe<Scalars['String']>,
  resetToken_gt?: Maybe<Scalars['String']>,
  resetToken_gte?: Maybe<Scalars['String']>,
  resetToken_contains?: Maybe<Scalars['String']>,
  resetToken_not_contains?: Maybe<Scalars['String']>,
  resetToken_starts_with?: Maybe<Scalars['String']>,
  resetToken_not_starts_with?: Maybe<Scalars['String']>,
  resetToken_ends_with?: Maybe<Scalars['String']>,
  resetToken_not_ends_with?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_not?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_in?: Maybe<Array<Scalars['DateTime']>>,
  resetTokenExpiry_not_in?: Maybe<Array<Scalars['DateTime']>>,
  resetTokenExpiry_lt?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_lte?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_gt?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_gte?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  isPrivate_not?: Maybe<Scalars['Boolean']>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  webPushNotificationToken_not?: Maybe<Scalars['String']>,
  webPushNotificationToken_in?: Maybe<Array<Scalars['String']>>,
  webPushNotificationToken_not_in?: Maybe<Array<Scalars['String']>>,
  webPushNotificationToken_lt?: Maybe<Scalars['String']>,
  webPushNotificationToken_lte?: Maybe<Scalars['String']>,
  webPushNotificationToken_gt?: Maybe<Scalars['String']>,
  webPushNotificationToken_gte?: Maybe<Scalars['String']>,
  webPushNotificationToken_contains?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_contains?: Maybe<Scalars['String']>,
  webPushNotificationToken_starts_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_starts_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_ends_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_ends_with?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken_not?: Maybe<Scalars['String']>,
  appPushNotificationToken_in?: Maybe<Array<Scalars['String']>>,
  appPushNotificationToken_not_in?: Maybe<Array<Scalars['String']>>,
  appPushNotificationToken_lt?: Maybe<Scalars['String']>,
  appPushNotificationToken_lte?: Maybe<Scalars['String']>,
  appPushNotificationToken_gt?: Maybe<Scalars['String']>,
  appPushNotificationToken_gte?: Maybe<Scalars['String']>,
  appPushNotificationToken_contains?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_contains?: Maybe<Scalars['String']>,
  appPushNotificationToken_starts_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_starts_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_ends_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<UserScalarWhereInput>>,
  OR?: Maybe<Array<UserScalarWhereInput>>,
  NOT?: Maybe<Array<UserScalarWhereInput>>,
};

export enum UserStatus {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type UserSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  OR?: Maybe<Array<UserSubscriptionWhereInput>>,
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>,
};

export type UserUpdateDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateManyDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateManyWithoutChatsInput = {
  create?: Maybe<Array<UserCreateWithoutChatsInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutChatsInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutChatsInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
};

export type UserUpdateManyWithoutFriendsInput = {
  create?: Maybe<Array<UserCreateWithoutFriendsInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFriendsInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFriendsInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
};

export type UserUpdateManyWithoutPartiesInput = {
  create?: Maybe<Array<UserCreateWithoutPartiesInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutPartiesInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutPartiesInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput,
  data: UserUpdateManyDataInput,
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>,
  update?: Maybe<UserUpdateDataInput>,
  upsert?: Maybe<UserUpsertNestedInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutCartItemsInput = {
  create?: Maybe<UserCreateWithoutCartItemsInput>,
  update?: Maybe<UserUpdateWithoutCartItemsDataInput>,
  upsert?: Maybe<UserUpsertWithoutCartItemsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutPendingFriendInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingFriendInvitationsInput>,
  update?: Maybe<UserUpdateWithoutPendingFriendInvitationsDataInput>,
  upsert?: Maybe<UserUpsertWithoutPendingFriendInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateOneRequiredWithoutPendingPartyInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingPartyInvitationsInput>,
  update?: Maybe<UserUpdateWithoutPendingPartyInvitationsDataInput>,
  upsert?: Maybe<UserUpsertWithoutPendingPartyInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdatepushNotificationsScopesInput = {
  set?: Maybe<Array<PushNotificationScope>>,
};

export type UserUpdateWithoutCartItemsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateWithoutChatsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateWithoutFriendsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateWithoutPartiesDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateWithoutPendingFriendInvitationsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateWithoutPendingPartyInvitationsDataInput = {
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyWithoutFriendsInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  pushNotificationsScopes?: Maybe<UserUpdatepushNotificationsScopesInput>,
};

export type UserUpdateWithWhereUniqueWithoutChatsInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutChatsDataInput,
};

export type UserUpdateWithWhereUniqueWithoutFriendsInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutFriendsDataInput,
};

export type UserUpdateWithWhereUniqueWithoutPartiesInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutPartiesDataInput,
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput,
  create: UserCreateInput,
};

export type UserUpsertWithoutCartItemsInput = {
  update: UserUpdateWithoutCartItemsDataInput,
  create: UserCreateWithoutCartItemsInput,
};

export type UserUpsertWithoutPendingFriendInvitationsInput = {
  update: UserUpdateWithoutPendingFriendInvitationsDataInput,
  create: UserCreateWithoutPendingFriendInvitationsInput,
};

export type UserUpsertWithoutPendingPartyInvitationsInput = {
  update: UserUpdateWithoutPendingPartyInvitationsDataInput,
  create: UserCreateWithoutPendingPartyInvitationsInput,
};

export type UserUpsertWithWhereUniqueWithoutChatsInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutChatsDataInput,
  create: UserCreateWithoutChatsInput,
};

export type UserUpsertWithWhereUniqueWithoutFriendsInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutFriendsDataInput,
  create: UserCreateWithoutFriendsInput,
};

export type UserUpsertWithWhereUniqueWithoutPartiesInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutPartiesDataInput,
  create: UserCreateWithoutPartiesInput,
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  parties_every?: Maybe<PartyWhereInput>,
  parties_some?: Maybe<PartyWhereInput>,
  parties_none?: Maybe<PartyWhereInput>,
  friends_every?: Maybe<UserWhereInput>,
  friends_some?: Maybe<UserWhereInput>,
  friends_none?: Maybe<UserWhereInput>,
  pendingFriendInvitations_every?: Maybe<FriendInvitationWhereInput>,
  pendingFriendInvitations_some?: Maybe<FriendInvitationWhereInput>,
  pendingFriendInvitations_none?: Maybe<FriendInvitationWhereInput>,
  pendingPartyInvitations_every?: Maybe<PartyInvitationWhereInput>,
  pendingPartyInvitations_some?: Maybe<PartyInvitationWhereInput>,
  pendingPartyInvitations_none?: Maybe<PartyInvitationWhereInput>,
  chats_every?: Maybe<ChatWhereInput>,
  chats_some?: Maybe<ChatWhereInput>,
  chats_none?: Maybe<ChatWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  lastOnline_not?: Maybe<Scalars['DateTime']>,
  lastOnline_in?: Maybe<Array<Scalars['DateTime']>>,
  lastOnline_not_in?: Maybe<Array<Scalars['DateTime']>>,
  lastOnline_lt?: Maybe<Scalars['DateTime']>,
  lastOnline_lte?: Maybe<Scalars['DateTime']>,
  lastOnline_gt?: Maybe<Scalars['DateTime']>,
  lastOnline_gte?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  deleted_not?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  provider_not?: Maybe<SocialMediaType>,
  provider_in?: Maybe<Array<SocialMediaType>>,
  provider_not_in?: Maybe<Array<SocialMediaType>>,
  avatar?: Maybe<Scalars['String']>,
  avatar_not?: Maybe<Scalars['String']>,
  avatar_in?: Maybe<Array<Scalars['String']>>,
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  avatar_lt?: Maybe<Scalars['String']>,
  avatar_lte?: Maybe<Scalars['String']>,
  avatar_gt?: Maybe<Scalars['String']>,
  avatar_gte?: Maybe<Scalars['String']>,
  avatar_contains?: Maybe<Scalars['String']>,
  avatar_not_contains?: Maybe<Scalars['String']>,
  avatar_starts_with?: Maybe<Scalars['String']>,
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  avatar_ends_with?: Maybe<Scalars['String']>,
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  thirdPartyId_not?: Maybe<Scalars['String']>,
  thirdPartyId_in?: Maybe<Array<Scalars['String']>>,
  thirdPartyId_not_in?: Maybe<Array<Scalars['String']>>,
  thirdPartyId_lt?: Maybe<Scalars['String']>,
  thirdPartyId_lte?: Maybe<Scalars['String']>,
  thirdPartyId_gt?: Maybe<Scalars['String']>,
  thirdPartyId_gte?: Maybe<Scalars['String']>,
  thirdPartyId_contains?: Maybe<Scalars['String']>,
  thirdPartyId_not_contains?: Maybe<Scalars['String']>,
  thirdPartyId_starts_with?: Maybe<Scalars['String']>,
  thirdPartyId_not_starts_with?: Maybe<Scalars['String']>,
  thirdPartyId_ends_with?: Maybe<Scalars['String']>,
  thirdPartyId_not_ends_with?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetToken_not?: Maybe<Scalars['String']>,
  resetToken_in?: Maybe<Array<Scalars['String']>>,
  resetToken_not_in?: Maybe<Array<Scalars['String']>>,
  resetToken_lt?: Maybe<Scalars['String']>,
  resetToken_lte?: Maybe<Scalars['String']>,
  resetToken_gt?: Maybe<Scalars['String']>,
  resetToken_gte?: Maybe<Scalars['String']>,
  resetToken_contains?: Maybe<Scalars['String']>,
  resetToken_not_contains?: Maybe<Scalars['String']>,
  resetToken_starts_with?: Maybe<Scalars['String']>,
  resetToken_not_starts_with?: Maybe<Scalars['String']>,
  resetToken_ends_with?: Maybe<Scalars['String']>,
  resetToken_not_ends_with?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_not?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_in?: Maybe<Array<Scalars['DateTime']>>,
  resetTokenExpiry_not_in?: Maybe<Array<Scalars['DateTime']>>,
  resetTokenExpiry_lt?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_lte?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_gt?: Maybe<Scalars['DateTime']>,
  resetTokenExpiry_gte?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  isPrivate_not?: Maybe<Scalars['Boolean']>,
  cartItems_every?: Maybe<PartyCartItemWhereInput>,
  cartItems_some?: Maybe<PartyCartItemWhereInput>,
  cartItems_none?: Maybe<PartyCartItemWhereInput>,
  webPushNotificationToken?: Maybe<Scalars['String']>,
  webPushNotificationToken_not?: Maybe<Scalars['String']>,
  webPushNotificationToken_in?: Maybe<Array<Scalars['String']>>,
  webPushNotificationToken_not_in?: Maybe<Array<Scalars['String']>>,
  webPushNotificationToken_lt?: Maybe<Scalars['String']>,
  webPushNotificationToken_lte?: Maybe<Scalars['String']>,
  webPushNotificationToken_gt?: Maybe<Scalars['String']>,
  webPushNotificationToken_gte?: Maybe<Scalars['String']>,
  webPushNotificationToken_contains?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_contains?: Maybe<Scalars['String']>,
  webPushNotificationToken_starts_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_starts_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_ends_with?: Maybe<Scalars['String']>,
  webPushNotificationToken_not_ends_with?: Maybe<Scalars['String']>,
  appPushNotificationToken?: Maybe<Scalars['String']>,
  appPushNotificationToken_not?: Maybe<Scalars['String']>,
  appPushNotificationToken_in?: Maybe<Array<Scalars['String']>>,
  appPushNotificationToken_not_in?: Maybe<Array<Scalars['String']>>,
  appPushNotificationToken_lt?: Maybe<Scalars['String']>,
  appPushNotificationToken_lte?: Maybe<Scalars['String']>,
  appPushNotificationToken_gt?: Maybe<Scalars['String']>,
  appPushNotificationToken_gte?: Maybe<Scalars['String']>,
  appPushNotificationToken_contains?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_contains?: Maybe<Scalars['String']>,
  appPushNotificationToken_starts_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_starts_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_ends_with?: Maybe<Scalars['String']>,
  appPushNotificationToken_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
};

export type Party_FragmentFragment = (
  { __typename?: 'Party' }
  & Pick<Party, 'id' | 'title' | 'description' | 'colorTint' | 'start' | 'end' | 'isPublic' | 'inviteSecret'>
  & { location: (
    { __typename?: 'Location' }
    & Pick<Location, 'placeName' | 'longitude' | 'latitude'>
  ), author: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'id'>
  ), members: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'avatar' | 'firstName' | 'lastName' | 'id'>
  )>>, cart: (
    { __typename?: 'PartyCart' }
    & Pick<PartyCart, 'id'>
  ) }
);

export type Message_FragmentFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'id' | 'content' | 'createdAt'>
  & { author: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'avatar' | 'id'>
  ) }
);

export type Party_Invitation_FragmentFragment = (
  { __typename?: 'PartyInvitation' }
  & Pick<PartyInvitation, 'id' | 'createdAt'>
  & { invitedBy: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
  ), user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
  ), party: (
    { __typename?: 'Party' }
    & Pick<Party, 'title' | 'id'>
  ) }
);

export type Last_Chat_Message_FragmentFragment = (
  { __typename?: 'Chat' }
  & Pick<Chat, 'hasUnreadMessages'>
  & { messages: Maybe<Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'createdAt' | 'content'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName'>
    ) }
  )>> }
);

export type Full_Saved_Track_FragmentFragment = (
  { __typename?: 'PartySavedTrack' }
  & Pick<PartySavedTrack, 'id' | 'name' | 'length' | 'uri' | 'popularity' | 'durationMs' | 'previewUrl' | 'stringArtists' | 'explicit'>
  & { album: (
    { __typename?: 'Album' }
    & Pick<Album, 'id' | 'name' | 'uri' | 'imageUrl' | 'releaseDate'>
  ) }
);

export type Party_Playlists_Connection_Node_FragmentFragment = (
  { __typename?: 'Playlist' }
  & Pick<Playlist, 'id' | 'spotifyExternalUrl' | 'name' | 'spotifyId' | 'imageUrl' | 'importable'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar'>
  ), tracks: Maybe<Array<(
    { __typename?: 'PartySavedTrack' }
    & Pick<PartySavedTrack, 'id' | 'uri'>
  )>> }
);

export type Party_Cart_Items_Connection_Node_FragmentFragment = (
  { __typename?: 'PartyCartItem' }
  & Pick<PartyCartItem, 'id' | 'name' | 'price' | 'quantity' | 'status'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName'>
  ), cart: (
    { __typename?: 'PartyCart' }
    & Pick<PartyCart, 'id'>
    & { party: (
      { __typename?: 'Party' }
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'id'>
      ) }
    ) }
  ) }
);

export type Party_Authentication_Minimal_Party_FragmentFragment = (
  { __typename?: 'Party' }
  & Pick<Party, 'id'>
);

export type SignupMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String']
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  ) }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  ) }
);

export type SocialLoginMutationVariables = {
  id: Scalars['String'],
  email: Scalars['String'],
  avatar?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  provider: SocialMediaType
};


export type SocialLoginMutation = (
  { __typename?: 'Mutation' }
  & { socialLogin: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  ) }
);

export type CreatePartyMutationVariables = {
  data: PartyCreateInput
};


export type CreatePartyMutation = (
  { __typename?: 'Mutation' }
  & { createParty: (
    { __typename?: 'Party' }
    & Party_FragmentFragment
  ) }
);

export type CreateMessageMutationVariables = {
  data: MessageCreateInput
};


export type CreateMessageMutation = (
  { __typename?: 'Mutation' }
  & { createMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'isSendByMe' | 'optimisticallyAdded' | 'optimisticallyCreated' | 'hasOptimisticError' | 'content' | 'createdAt'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName' | 'avatar' | 'id'>
    ) }
  ) }
);

export type RequestPasswordResetMutationVariables = {
  email: Scalars['String']
};


export type RequestPasswordResetMutation = (
  { __typename?: 'Mutation' }
  & { requestReset: Maybe<(
    { __typename?: 'SuccessMessage' }
    & Pick<SuccessMessage, 'message'>
  )> }
);

export type ResetPasswordMutationVariables = {
  password: Scalars['String'],
  confirmPassword: Scalars['String'],
  resetToken: Scalars['String']
};


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { resetPassword: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  )> }
);

export type UpdateUserMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type CreatePartyInvitationMutationVariables = {
  data: PartyInvitationCreateInput
};


export type CreatePartyInvitationMutation = (
  { __typename?: 'Mutation' }
  & { createPartyInvitation: (
    { __typename?: 'PartyInvitation' }
    & Pick<PartyInvitation, 'id'>
  ) }
);

export type DeleteManyPartyInvitationsMutationVariables = {
  where?: Maybe<PartyInvitationWhereInput>
};


export type DeleteManyPartyInvitationsMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyPartyInvitations: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type DeletePartyInvitationMutationMutationVariables = {
  where: PartyInvitationWhereUniqueInput
};


export type DeletePartyInvitationMutationMutation = (
  { __typename?: 'Mutation' }
  & { deletePartyInvitation: Maybe<(
    { __typename?: 'PartyInvitation' }
    & Pick<PartyInvitation, 'id'>
  )> }
);

export type JoinPartyMutationMutationVariables = {
  partyId: Scalars['ID']
};


export type JoinPartyMutationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'joinParty'>
);

export type AddTrackToPartyMutationVariables = {
  data: PartySavedTrackCreateInput
};


export type AddTrackToPartyMutation = (
  { __typename?: 'Mutation' }
  & { createPartySavedTrack: (
    { __typename?: 'PartySavedTrack' }
    & Pick<PartySavedTrack, 'spotifyId'>
    & Full_Saved_Track_FragmentFragment
  ) }
);

export type User_DeleteFriendInvitationMutationVariables = {
  where: FriendInvitationWhereUniqueInput
};


export type User_DeleteFriendInvitationMutation = (
  { __typename?: 'Mutation' }
  & { deleteFriendInvitation: Maybe<(
    { __typename?: 'FriendInvitation' }
    & Pick<FriendInvitation, 'id'>
  )> }
);

export type MeQueryQueryVariables = {};


export type MeQueryQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'avatar' | 'isPrivate'>
  )> }
);

export type PaginateUsersQueryQueryVariables = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PaginateUsersQueryQuery = (
  { __typename?: 'Query' }
  & { paginateUsers: (
    { __typename?: 'UserConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserEdge' }
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar' | 'lastOnline' | 'status'>
      ) }
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ) }
);

export type PartiesQueryQueryVariables = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartiesQueryQuery = (
  { __typename?: 'Query' }
  & { parties: Array<Maybe<(
    { __typename?: 'Party' }
    & { location: (
      { __typename?: 'Location' }
      & Pick<Location, 'placeName' | 'latitude' | 'longitude'>
    ) }
    & Party_FragmentFragment
  )>> }
);

export type PartyQueryQueryVariables = {
  where: PartyWhereUniqueInput
};


export type PartyQueryQuery = (
  { __typename?: 'Query' }
  & { party: Maybe<(
    { __typename?: 'Party' }
    & { location: (
      { __typename?: 'Location' }
      & Pick<Location, 'placeName' | 'latitude' | 'longitude'>
    ) }
    & Party_FragmentFragment
  )> }
);

export type PaginatePartiesQueryQueryVariables = {
  where?: Maybe<PartyWhereInput>,
  orderBy?: Maybe<PartyOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PaginatePartiesQueryQuery = (
  { __typename?: 'Query' }
  & { partiesConnection: (
    { __typename?: 'PartyConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'PartyEdge' }
      & { node: (
        { __typename?: 'Party' }
        & Party_FragmentFragment
      ) }
    )>> }
  ) }
);

export type PaginateChatsQueryQueryVariables = {
  where?: Maybe<ChatWhereInput>,
  orderBy?: Maybe<ChatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PaginateChatsQueryQuery = (
  { __typename?: 'Query' }
  & { chatsConnection: (
    { __typename?: 'ChatConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'ChatEdge' }
      & { node: (
        { __typename?: 'Chat' }
        & Pick<Chat, 'id'>
        & { party: (
          { __typename?: 'Party' }
          & Pick<Party, 'title'>
        ), members: Maybe<Array<(
          { __typename?: 'User' }
          & Pick<User, 'avatar' | 'firstName' | 'lastName'>
        )>>, messages: Maybe<Array<(
          { __typename?: 'Message' }
          & Pick<Message, 'createdAt' | 'content'>
          & { author: (
            { __typename?: 'User' }
            & Pick<User, 'firstName' | 'lastName'>
          ) }
        )>> }
      ) }
    )>> }
  ) }
);

export type PaginateMessagesQueryQueryVariables = {
  where?: Maybe<MessageWhereInput>,
  orderBy?: Maybe<MessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PaginateMessagesQueryQuery = (
  { __typename?: 'Query' }
  & { messagesConnection: (
    { __typename?: 'MessageConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'startCursor' | 'hasPreviousPage'>
    ), edges: Array<Maybe<(
      { __typename?: 'MessageEdge' }
      & { node: (
        { __typename?: 'Message' }
        & Message_FragmentFragment
      ) }
    )>> }
  ) }
);

export type PaginateUsersInviteToPartyQueryQueryVariables = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  partyInvitationWhere?: Maybe<PartyInvitationWhereInput>
};


export type PaginateUsersInviteToPartyQueryQuery = (
  { __typename?: 'Query' }
  & { paginateUsers: (
    { __typename?: 'UserConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserEdge' }
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar' | 'lastOnline' | 'status'>
        & { pendingPartyInvitations: Maybe<Array<(
          { __typename?: 'PartyInvitation' }
          & Pick<PartyInvitation, 'id'>
          & { invitedBy: (
            { __typename?: 'User' }
            & Pick<User, 'id'>
          ), party: (
            { __typename?: 'Party' }
            & Pick<Party, 'id'>
          ) }
        )>> }
      ) }
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ) }
);

export type PartyInvitationsConnectionQueryQueryVariables = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartyInvitationsConnectionQueryQuery = (
  { __typename?: 'Query' }
  & { partyInvitationsConnection: (
    { __typename?: 'PartyInvitationConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PartyInvitationEdge' }
      & { node: (
        { __typename?: 'PartyInvitation' }
        & Party_Invitation_FragmentFragment
      ) }
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ), full: (
    { __typename?: 'PartyInvitationConnection' }
    & { aggregate: (
      { __typename?: 'AggregatePartyInvitation' }
      & Pick<AggregatePartyInvitation, 'count'>
    ) }
  ) }
);

export type HasChatsQueryQueryVariables = {
  where?: Maybe<ChatWhereInput>
};


export type HasChatsQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hasChats'>
);

export type HasPartiesQueryQueryVariables = {
  where?: Maybe<PartyWhereInput>
};


export type HasPartiesQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hasParties'>
);

export type PartyInvitationsQueryQueryVariables = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PartyInvitationsQueryQuery = (
  { __typename?: 'Query' }
  & { partyInvitations: Array<Maybe<(
    { __typename?: 'PartyInvitation' }
    & Party_Invitation_FragmentFragment
  )>> }
);

export type CanJoinPartyQueryQueryVariables = {
  userId: Scalars['String'],
  inviteSecret: Scalars['String'],
  partyId: Scalars['String']
};


export type CanJoinPartyQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'canJoinParty'>
);

export type Party_SavedTracksQueryVariables = {
  where?: Maybe<PartySavedTrackWhereInput>,
  orderBy?: Maybe<PartySavedTrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Party_SavedTracksQuery = (
  { __typename?: 'Query' }
  & { partySavedTracks: Array<Maybe<(
    { __typename?: 'PartySavedTrack' }
    & Pick<PartySavedTrack, 'spotifyId'>
    & Full_Saved_Track_FragmentFragment
  )>> }
);

export type ChatMessagesSubscriptionSubscriptionVariables = {
  where?: Maybe<MessageSubscriptionWhereInput>
};


export type ChatMessagesSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { message: Maybe<(
    { __typename?: 'MessageSubscriptionPayload' }
    & { node: Maybe<(
      { __typename?: 'Message' }
      & Pick<Message, 'id' | 'isSendByMe' | 'optimisticallyAdded' | 'optimisticallyCreated' | 'hasOptimisticError' | 'content' | 'createdAt'>
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'firstName' | 'lastName' | 'avatar' | 'id'>
      ), chat: (
        { __typename?: 'Chat' }
        & Pick<Chat, 'id'>
      ) }
    )> }
  )> }
);

export type PartyInvitationSubscriptionSubscriptionVariables = {
  where?: Maybe<PartyInvitationSubscriptionWhereInput>
};


export type PartyInvitationSubscriptionSubscription = (
  { __typename?: 'Subscription' }
  & { partyInvitation: Maybe<(
    { __typename?: 'PartyInvitationSubscriptionPayload' }
    & Pick<PartyInvitationSubscriptionPayload, 'mutation'>
    & { node: Maybe<(
      { __typename?: 'PartyInvitation' }
      & Party_Invitation_FragmentFragment
    )>, previousValues: Maybe<(
      { __typename?: 'PartyInvitationPreviousValues' }
      & Pick<PartyInvitationPreviousValues, 'id' | 'invitedUserId' | 'partyId'>
    )> }
  )> }
);

export type User_UserInfoMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type User_UserInfoMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type Information_FragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'firstName' | 'lastName'>
);

export type User_UpdatePrivacyMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type User_UpdatePrivacyMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type User_Privacy_FragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'isPrivate'>
);

export type Party_CreatePartyCartItemMutationVariables = {
  data: PartyCartItemCreateInput
};


export type Party_CreatePartyCartItemMutation = (
  { __typename?: 'Mutation' }
  & { createPartyCartItem: (
    { __typename?: 'PartyCartItem' }
    & Party_Cart_Items_Connection_Node_FragmentFragment
  ) }
);

export type Party_DeletePartyCartItemMutationVariables = {
  where: PartyCartItemWhereUniqueInput
};


export type Party_DeletePartyCartItemMutation = (
  { __typename?: 'Mutation' }
  & { deletePartyCartItem: Maybe<(
    { __typename?: 'PartyCartItem' }
    & Pick<PartyCartItem, 'id'>
  )> }
);

export type Party_CartItemsConnectionQueryVariables = {
  where?: Maybe<PartyCartItemWhereInput>,
  orderBy?: Maybe<PartyCartItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Party_CartItemsConnectionQuery = (
  { __typename?: 'Query' }
  & { partyCartItemsConnection: (
    { __typename?: 'PartyCartItemConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor' | 'startCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'PartyCartItemEdge' }
      & { node: (
        { __typename?: 'PartyCartItem' }
        & Party_Cart_Items_Connection_Node_FragmentFragment
      ) }
    )>> }
  ), pagination: (
    { __typename?: 'PartyCartItemConnection' }
    & { aggregate: (
      { __typename?: 'AggregatePartyCartItem' }
      & Pick<AggregatePartyCartItem, 'count'>
    ) }
  ) }
);

export type Party_UpdatePartyCartItemMutationVariables = {
  data: PartyCartItemUpdateInput,
  where: PartyCartItemWhereUniqueInput
};


export type Party_UpdatePartyCartItemMutation = (
  { __typename?: 'Mutation' }
  & { updatePartyCartItem: Maybe<(
    { __typename?: 'PartyCartItem' }
    & Pick<PartyCartItem, 'id' | 'quantity' | 'price'>
  )> }
);

export type Party_CreatePlaylistMutationVariables = {
  data: PlaylistCreateInput
};


export type Party_CreatePlaylistMutation = (
  { __typename?: 'Mutation' }
  & { createPlaylist: (
    { __typename?: 'Playlist' }
    & Party_Playlists_Connection_Node_FragmentFragment
  ) }
);

export type Party_CombinePlaylistsMutationVariables = {
  partyPlannerData: CombinePlaylistPartyPlannerData,
  spotifyData: CombinePlaylistCreatedSpotifyPlaylistInput
};


export type Party_CombinePlaylistsMutation = (
  { __typename?: 'Mutation' }
  & { combinePlaylists: (
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'id'>
  ) }
);

export type Party_ImportPlaylistsToPartyMutationVariables = {
  playlists: Scalars['String'],
  partyId: Scalars['ID']
};


export type Party_ImportPlaylistsToPartyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'importPlaylistsToParty'>
);

export type Party_PlaylistsConnectionQueryVariables = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Party_PlaylistsConnectionQuery = (
  { __typename?: 'Query' }
  & { playlistsConnection: (
    { __typename?: 'PlaylistConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'PlaylistEdge' }
      & { node: (
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'createdAt'>
        & Party_Playlists_Connection_Node_FragmentFragment
      ) }
    )>> }
  ) }
);

export type Party_LeavePartyMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type Party_LeavePartyMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type Party_JoinPublicPartyMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type Party_JoinPublicPartyMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type Party_DeletePartyMutationVariables = {
  where: PartyWhereUniqueInput
};


export type Party_DeletePartyMutation = (
  { __typename?: 'Mutation' }
  & { deleteParty: Maybe<(
    { __typename?: 'Party' }
    & Pick<Party, 'id'>
  )> }
);

export type User_PeopleConnectionQueryVariables = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type User_PeopleConnectionQuery = (
  { __typename?: 'Query' }
  & { usersConnection: (
    { __typename?: 'UserConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'UserEdge' }
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatar' | 'createdAt'>
      ) }
    )>> }
  ) }
);

export type Party_FragmentLocation = Party_FragmentFragment['location'];
export type Party_FragmentAuthor = Party_FragmentFragment['author'];
export type Party_FragmentMembers = Party_FragmentFragment['members'][0];
export type Party_FragmentCart = Party_FragmentFragment['cart'];
export type Message_FragmentAuthor = Message_FragmentFragment['author'];
export type Party_Invitation_FragmentInvitedBy = Party_Invitation_FragmentFragment['invitedBy'];
export type Party_Invitation_FragmentUser = Party_Invitation_FragmentFragment['user'];
export type Party_Invitation_FragmentParty = Party_Invitation_FragmentFragment['party'];
export type Last_Chat_Message_FragmentMessages = Last_Chat_Message_FragmentFragment['messages'][0];
export type Last_Chat_Message_FragmentAuthor = Last_Chat_Message_FragmentFragment['messages'][0]['author'];
export type Full_Saved_Track_FragmentAlbum = Full_Saved_Track_FragmentFragment['album'];
export type Party_Playlists_Connection_Node_FragmentUser = Party_Playlists_Connection_Node_FragmentFragment['user'];
export type Party_Playlists_Connection_Node_FragmentTracks = Party_Playlists_Connection_Node_FragmentFragment['tracks'][0];
export type Party_Cart_Items_Connection_Node_FragmentUser = Party_Cart_Items_Connection_Node_FragmentFragment['user'];
export type Party_Cart_Items_Connection_Node_FragmentCart = Party_Cart_Items_Connection_Node_FragmentFragment['cart'];
export type Party_Cart_Items_Connection_Node_FragmentParty = Party_Cart_Items_Connection_Node_FragmentFragment['cart']['party'];
export type Party_Cart_Items_Connection_Node_FragmentAuthor = Party_Cart_Items_Connection_Node_FragmentFragment['cart']['party']['author'];
export type SignupVariables = SignupMutationVariables;
export type SignupSignup = SignupMutation['signup'];
export type SignupUser = SignupMutation['signup']['user'];
export type LoginVariables = LoginMutationVariables;
export type LoginLogin = LoginMutation['login'];
export type LoginUser = LoginMutation['login']['user'];
export type SocialLoginVariables = SocialLoginMutationVariables;
export type SocialLoginSocialLogin = SocialLoginMutation['socialLogin'];
export type SocialLoginUser = SocialLoginMutation['socialLogin']['user'];
export type CreatePartyVariables = CreatePartyMutationVariables;
export type CreatePartyCreateParty = Party_FragmentFragment;
export type CreateMessageVariables = CreateMessageMutationVariables;
export type CreateMessageCreateMessage = CreateMessageMutation['createMessage'];
export type CreateMessageAuthor = CreateMessageMutation['createMessage']['author'];
export type RequestPasswordResetVariables = RequestPasswordResetMutationVariables;
export type RequestPasswordResetRequestReset = RequestPasswordResetMutation['requestReset'];
export type ResetPasswordVariables = ResetPasswordMutationVariables;
export type ResetPasswordResetPassword = ResetPasswordMutation['resetPassword'];
export type UpdateUserVariables = UpdateUserMutationVariables;
export type UpdateUserUpdateUser = UpdateUserMutation['updateUser'];
export type CreatePartyInvitationVariables = CreatePartyInvitationMutationVariables;
export type CreatePartyInvitationCreatePartyInvitation = CreatePartyInvitationMutation['createPartyInvitation'];
export type DeleteManyPartyInvitationsVariables = DeleteManyPartyInvitationsMutationVariables;
export type DeleteManyPartyInvitationsDeleteManyPartyInvitations = DeleteManyPartyInvitationsMutation['deleteManyPartyInvitations'];
export type DeletePartyInvitationMutationVariables = DeletePartyInvitationMutationMutationVariables;
export type DeletePartyInvitationMutationDeletePartyInvitation = DeletePartyInvitationMutationMutation['deletePartyInvitation'];
export type JoinPartyMutationVariables = JoinPartyMutationMutationVariables;
export type AddTrackToPartyVariables = AddTrackToPartyMutationVariables;
export type AddTrackToPartyCreatePartySavedTrack = Full_Saved_Track_FragmentFragment;
export type User_DeleteFriendInvitationVariables = User_DeleteFriendInvitationMutationVariables;
export type User_DeleteFriendInvitationDeleteFriendInvitation = User_DeleteFriendInvitationMutation['deleteFriendInvitation'];
export type MeQueryVariables = MeQueryQueryVariables;
export type MeQueryMe = MeQueryQuery['me'];
export type PaginateUsersQueryVariables = PaginateUsersQueryQueryVariables;
export type PaginateUsersQueryPaginateUsers = PaginateUsersQueryQuery['paginateUsers'];
export type PaginateUsersQueryEdges = PaginateUsersQueryQuery['paginateUsers']['edges'][0];
export type PaginateUsersQueryNode = PaginateUsersQueryQuery['paginateUsers']['edges'][0]['node'];
export type PaginateUsersQueryPageInfo = PaginateUsersQueryQuery['paginateUsers']['pageInfo'];
export type PartiesQueryVariables = PartiesQueryQueryVariables;
export type PartiesQueryParties = Party_FragmentFragment;
export type PartiesQueryLocation = PartiesQueryQuery['parties'][0]['location'];
export type PartyQueryVariables = PartyQueryQueryVariables;
export type PartyQueryParty = Party_FragmentFragment;
export type PartyQueryLocation = PartyQueryQuery['party']['location'];
export type PaginatePartiesQueryVariables = PaginatePartiesQueryQueryVariables;
export type PaginatePartiesQueryPartiesConnection = PaginatePartiesQueryQuery['partiesConnection'];
export type PaginatePartiesQueryPageInfo = PaginatePartiesQueryQuery['partiesConnection']['pageInfo'];
export type PaginatePartiesQueryEdges = PaginatePartiesQueryQuery['partiesConnection']['edges'][0];
export type PaginatePartiesQueryNode = Party_FragmentFragment;
export type PaginateChatsQueryVariables = PaginateChatsQueryQueryVariables;
export type PaginateChatsQueryChatsConnection = PaginateChatsQueryQuery['chatsConnection'];
export type PaginateChatsQueryPageInfo = PaginateChatsQueryQuery['chatsConnection']['pageInfo'];
export type PaginateChatsQueryEdges = PaginateChatsQueryQuery['chatsConnection']['edges'][0];
export type PaginateChatsQueryNode = PaginateChatsQueryQuery['chatsConnection']['edges'][0]['node'];
export type PaginateChatsQueryParty = PaginateChatsQueryQuery['chatsConnection']['edges'][0]['node']['party'];
export type PaginateChatsQueryMembers = PaginateChatsQueryQuery['chatsConnection']['edges'][0]['node']['members'][0];
export type PaginateChatsQueryMessages = PaginateChatsQueryQuery['chatsConnection']['edges'][0]['node']['messages'][0];
export type PaginateChatsQueryAuthor = PaginateChatsQueryQuery['chatsConnection']['edges'][0]['node']['messages'][0]['author'];
export type PaginateMessagesQueryVariables = PaginateMessagesQueryQueryVariables;
export type PaginateMessagesQueryMessagesConnection = PaginateMessagesQueryQuery['messagesConnection'];
export type PaginateMessagesQueryPageInfo = PaginateMessagesQueryQuery['messagesConnection']['pageInfo'];
export type PaginateMessagesQueryEdges = PaginateMessagesQueryQuery['messagesConnection']['edges'][0];
export type PaginateMessagesQueryNode = Message_FragmentFragment;
export type PaginateUsersInviteToPartyQueryVariables = PaginateUsersInviteToPartyQueryQueryVariables;
export type PaginateUsersInviteToPartyQueryPaginateUsers = PaginateUsersInviteToPartyQueryQuery['paginateUsers'];
export type PaginateUsersInviteToPartyQueryEdges = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0];
export type PaginateUsersInviteToPartyQueryNode = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node'];
export type PaginateUsersInviteToPartyQueryPendingPartyInvitations = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node']['pendingPartyInvitations'][0];
export type PaginateUsersInviteToPartyQueryInvitedBy = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node']['pendingPartyInvitations'][0]['invitedBy'];
export type PaginateUsersInviteToPartyQueryParty = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['edges'][0]['node']['pendingPartyInvitations'][0]['party'];
export type PaginateUsersInviteToPartyQueryPageInfo = PaginateUsersInviteToPartyQueryQuery['paginateUsers']['pageInfo'];
export type PartyInvitationsConnectionQueryVariables = PartyInvitationsConnectionQueryQueryVariables;
export type PartyInvitationsConnectionQueryPartyInvitationsConnection = PartyInvitationsConnectionQueryQuery['partyInvitationsConnection'];
export type PartyInvitationsConnectionQueryEdges = PartyInvitationsConnectionQueryQuery['partyInvitationsConnection']['edges'][0];
export type PartyInvitationsConnectionQueryNode = Party_Invitation_FragmentFragment;
export type PartyInvitationsConnectionQueryPageInfo = PartyInvitationsConnectionQueryQuery['partyInvitationsConnection']['pageInfo'];
export type PartyInvitationsConnectionQueryFull = PartyInvitationsConnectionQueryQuery['full'];
export type PartyInvitationsConnectionQueryAggregate = PartyInvitationsConnectionQueryQuery['full']['aggregate'];
export type HasChatsQueryVariables = HasChatsQueryQueryVariables;
export type HasPartiesQueryVariables = HasPartiesQueryQueryVariables;
export type PartyInvitationsQueryVariables = PartyInvitationsQueryQueryVariables;
export type PartyInvitationsQueryPartyInvitations = Party_Invitation_FragmentFragment;
export type CanJoinPartyQueryVariables = CanJoinPartyQueryQueryVariables;
export type Party_SavedTracksVariables = Party_SavedTracksQueryVariables;
export type Party_SavedTracksPartySavedTracks = Full_Saved_Track_FragmentFragment;
export type ChatMessagesSubscriptionVariables = ChatMessagesSubscriptionSubscriptionVariables;
export type ChatMessagesSubscriptionMessage = ChatMessagesSubscriptionSubscription['message'];
export type ChatMessagesSubscriptionNode = ChatMessagesSubscriptionSubscription['message']['node'];
export type ChatMessagesSubscriptionAuthor = ChatMessagesSubscriptionSubscription['message']['node']['author'];
export type ChatMessagesSubscriptionChat = ChatMessagesSubscriptionSubscription['message']['node']['chat'];
export type PartyInvitationSubscriptionVariables = PartyInvitationSubscriptionSubscriptionVariables;
export type PartyInvitationSubscriptionPartyInvitation = PartyInvitationSubscriptionSubscription['partyInvitation'];
export type PartyInvitationSubscriptionNode = Party_Invitation_FragmentFragment;
export type PartyInvitationSubscriptionPreviousValues = PartyInvitationSubscriptionSubscription['partyInvitation']['previousValues'];
export type User_UserInfoVariables = User_UserInfoMutationVariables;
export type User_UserInfoUpdateUser = User_UserInfoMutation['updateUser'];
export type User_UpdatePrivacyVariables = User_UpdatePrivacyMutationVariables;
export type User_UpdatePrivacyUpdateUser = User_UpdatePrivacyMutation['updateUser'];
export type Party_CreatePartyCartItemVariables = Party_CreatePartyCartItemMutationVariables;
export type Party_CreatePartyCartItemCreatePartyCartItem = Party_Cart_Items_Connection_Node_FragmentFragment;
export type Party_DeletePartyCartItemVariables = Party_DeletePartyCartItemMutationVariables;
export type Party_DeletePartyCartItemDeletePartyCartItem = Party_DeletePartyCartItemMutation['deletePartyCartItem'];
export type Party_CartItemsConnectionVariables = Party_CartItemsConnectionQueryVariables;
export type Party_CartItemsConnectionPartyCartItemsConnection = Party_CartItemsConnectionQuery['partyCartItemsConnection'];
export type Party_CartItemsConnectionPageInfo = Party_CartItemsConnectionQuery['partyCartItemsConnection']['pageInfo'];
export type Party_CartItemsConnectionEdges = Party_CartItemsConnectionQuery['partyCartItemsConnection']['edges'][0];
export type Party_CartItemsConnectionNode = Party_Cart_Items_Connection_Node_FragmentFragment;
export type Party_CartItemsConnectionPagination = Party_CartItemsConnectionQuery['pagination'];
export type Party_CartItemsConnectionAggregate = Party_CartItemsConnectionQuery['pagination']['aggregate'];
export type Party_UpdatePartyCartItemVariables = Party_UpdatePartyCartItemMutationVariables;
export type Party_UpdatePartyCartItemUpdatePartyCartItem = Party_UpdatePartyCartItemMutation['updatePartyCartItem'];
export type Party_CreatePlaylistVariables = Party_CreatePlaylistMutationVariables;
export type Party_CreatePlaylistCreatePlaylist = Party_Playlists_Connection_Node_FragmentFragment;
export type Party_CombinePlaylistsVariables = Party_CombinePlaylistsMutationVariables;
export type Party_CombinePlaylistsCombinePlaylists = Party_CombinePlaylistsMutation['combinePlaylists'];
export type Party_ImportPlaylistsToPartyVariables = Party_ImportPlaylistsToPartyMutationVariables;
export type Party_PlaylistsConnectionVariables = Party_PlaylistsConnectionQueryVariables;
export type Party_PlaylistsConnectionPlaylistsConnection = Party_PlaylistsConnectionQuery['playlistsConnection'];
export type Party_PlaylistsConnectionPageInfo = Party_PlaylistsConnectionQuery['playlistsConnection']['pageInfo'];
export type Party_PlaylistsConnectionEdges = Party_PlaylistsConnectionQuery['playlistsConnection']['edges'][0];
export type Party_PlaylistsConnectionNode = Party_Playlists_Connection_Node_FragmentFragment;
export type Party_LeavePartyVariables = Party_LeavePartyMutationVariables;
export type Party_LeavePartyUpdateUser = Party_LeavePartyMutation['updateUser'];
export type Party_JoinPublicPartyVariables = Party_JoinPublicPartyMutationVariables;
export type Party_JoinPublicPartyUpdateUser = Party_JoinPublicPartyMutation['updateUser'];
export type Party_DeletePartyVariables = Party_DeletePartyMutationVariables;
export type Party_DeletePartyDeleteParty = Party_DeletePartyMutation['deleteParty'];
export type User_PeopleConnectionVariables = User_PeopleConnectionQueryVariables;
export type User_PeopleConnectionUsersConnection = User_PeopleConnectionQuery['usersConnection'];
export type User_PeopleConnectionPageInfo = User_PeopleConnectionQuery['usersConnection']['pageInfo'];
export type User_PeopleConnectionEdges = User_PeopleConnectionQuery['usersConnection']['edges'][0];
export type User_PeopleConnectionNode = User_PeopleConnectionQuery['usersConnection']['edges'][0]['node'];
export const Party_FragmentFragmentDoc = gql`
    fragment PARTY_FRAGMENT on Party {
  id
  title
  description
  location {
    placeName
    longitude
    latitude
  }
  author {
    firstName
    lastName
    id
  }
  members {
    avatar
    firstName
    lastName
    id
  }
  cart {
    id
  }
  colorTint
  start
  end
  isPublic
  inviteSecret
}
    `;
export const Message_FragmentFragmentDoc = gql`
    fragment MESSAGE_FRAGMENT on Message {
  id
  author {
    firstName
    lastName
    avatar
    id
  }
  content
  createdAt
}
    `;
export const Party_Invitation_FragmentFragmentDoc = gql`
    fragment PARTY_INVITATION_FRAGMENT on PartyInvitation {
  id
  createdAt
  invitedBy {
    id
    firstName
    lastName
    avatar
  }
  user {
    id
    firstName
    lastName
    avatar
  }
  party {
    title
    id
  }
}
    `;
export const Last_Chat_Message_FragmentFragmentDoc = gql`
    fragment LAST_CHAT_MESSAGE_FRAGMENT on Chat {
  messages(last: 1) {
    createdAt
    content
    author {
      firstName
      lastName
    }
  }
  hasUnreadMessages @client
}
    `;
export const Full_Saved_Track_FragmentFragmentDoc = gql`
    fragment FULL_SAVED_TRACK_FRAGMENT on PartySavedTrack {
  id
  name
  length
  uri
  popularity
  durationMs
  previewUrl
  stringArtists
  explicit
  popularity
  album {
    id
    name
    uri
    imageUrl
    releaseDate
  }
}
    `;
export const Party_Playlists_Connection_Node_FragmentFragmentDoc = gql`
    fragment PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT on Playlist {
  id
  spotifyExternalUrl
  name
  spotifyId
  imageUrl
  importable
  user {
    id
    firstName
    lastName
    avatar
  }
  tracks {
    id
    uri
  }
}
    `;
export const Party_Cart_Items_Connection_Node_FragmentFragmentDoc = gql`
    fragment PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT on PartyCartItem {
  id
  name
  price
  quantity
  status
  user {
    id
    firstName
    lastName
  }
  cart {
    id
    party {
      author {
        id
      }
    }
  }
}
    `;
export const Party_Authentication_Minimal_Party_FragmentFragmentDoc = gql`
    fragment PARTY_AUTHENTICATION_MINIMAL_PARTY_FRAGMENT on Party {
  id
}
    `;
export const Information_FragmentFragmentDoc = gql`
    fragment INFORMATION_FRAGMENT on User {
  firstName
  lastName
}
    `;
export const User_Privacy_FragmentFragmentDoc = gql`
    fragment USER_PRIVACY_FRAGMENT on User {
  isPrivate
}
    `;
export const SignupDocument = gql`
    mutation Signup($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  signup(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
    user {
      id
    }
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignupGQL extends Apollo.Mutation<SignupMutation, SignupMutationVariables> {
    document = SignupDocument;
    
  }
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
    }
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
  }
export const SocialLoginDocument = gql`
    mutation SocialLogin($id: String!, $email: String!, $avatar: String, $firstName: String!, $lastName: String!, $provider: SocialMediaType!) {
  socialLogin(id: $id, email: $email, avatar: $avatar, firstName: $firstName, lastName: $lastName, provider: $provider) {
    user {
      id
    }
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SocialLoginGQL extends Apollo.Mutation<SocialLoginMutation, SocialLoginMutationVariables> {
    document = SocialLoginDocument;
    
  }
export const CreatePartyDocument = gql`
    mutation CreateParty($data: PartyCreateInput!) {
  createParty(data: $data) {
    ...PARTY_FRAGMENT
  }
}
    ${Party_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyGQL extends Apollo.Mutation<CreatePartyMutation, CreatePartyMutationVariables> {
    document = CreatePartyDocument;
    
  }
export const CreateMessageDocument = gql`
    mutation CreateMessage($data: MessageCreateInput!) {
  createMessage(data: $data) {
    id
    author {
      firstName
      lastName
      avatar
      id
    }
    isSendByMe @client
    optimisticallyAdded @client
    optimisticallyCreated @client
    hasOptimisticError @client
    content
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateMessageGQL extends Apollo.Mutation<CreateMessageMutation, CreateMessageMutationVariables> {
    document = CreateMessageDocument;
    
  }
export const RequestPasswordResetDocument = gql`
    mutation RequestPasswordReset($email: String!) {
  requestReset(email: $email) {
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RequestPasswordResetGQL extends Apollo.Mutation<RequestPasswordResetMutation, RequestPasswordResetMutationVariables> {
    document = RequestPasswordResetDocument;
    
  }
export const ResetPasswordDocument = gql`
    mutation ResetPassword($password: String!, $confirmPassword: String!, $resetToken: String!) {
  resetPassword(password: $password, confirmPassword: $confirmPassword, resetToken: $resetToken) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResetPasswordGQL extends Apollo.Mutation<ResetPasswordMutation, ResetPasswordMutationVariables> {
    document = ResetPasswordDocument;
    
  }
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
  }
export const CreatePartyInvitationDocument = gql`
    mutation CreatePartyInvitation($data: PartyInvitationCreateInput!) {
  createPartyInvitation(data: $data) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePartyInvitationGQL extends Apollo.Mutation<CreatePartyInvitationMutation, CreatePartyInvitationMutationVariables> {
    document = CreatePartyInvitationDocument;
    
  }
export const DeleteManyPartyInvitationsDocument = gql`
    mutation DeleteManyPartyInvitations($where: PartyInvitationWhereInput) {
  deleteManyPartyInvitations(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteManyPartyInvitationsGQL extends Apollo.Mutation<DeleteManyPartyInvitationsMutation, DeleteManyPartyInvitationsMutationVariables> {
    document = DeleteManyPartyInvitationsDocument;
    
  }
export const DeletePartyInvitationMutationDocument = gql`
    mutation DeletePartyInvitationMutation($where: PartyInvitationWhereUniqueInput!) {
  deletePartyInvitation(where: $where) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePartyInvitationMutationGQL extends Apollo.Mutation<DeletePartyInvitationMutationMutation, DeletePartyInvitationMutationMutationVariables> {
    document = DeletePartyInvitationMutationDocument;
    
  }
export const JoinPartyMutationDocument = gql`
    mutation JoinPartyMutation($partyId: ID!) {
  joinParty(partyId: $partyId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class JoinPartyMutationGQL extends Apollo.Mutation<JoinPartyMutationMutation, JoinPartyMutationMutationVariables> {
    document = JoinPartyMutationDocument;
    
  }
export const AddTrackToPartyDocument = gql`
    mutation AddTrackToParty($data: PartySavedTrackCreateInput!) {
  createPartySavedTrack(data: $data) {
    ...FULL_SAVED_TRACK_FRAGMENT
    spotifyId
  }
}
    ${Full_Saved_Track_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddTrackToPartyGQL extends Apollo.Mutation<AddTrackToPartyMutation, AddTrackToPartyMutationVariables> {
    document = AddTrackToPartyDocument;
    
  }
export const User_DeleteFriendInvitationDocument = gql`
    mutation User_DeleteFriendInvitation($where: FriendInvitationWhereUniqueInput!) {
  deleteFriendInvitation(where: $where) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class User_DeleteFriendInvitationGQL extends Apollo.Mutation<User_DeleteFriendInvitationMutation, User_DeleteFriendInvitationMutationVariables> {
    document = User_DeleteFriendInvitationDocument;
    
  }
export const MeQueryDocument = gql`
    query MeQuery {
  me {
    id
    email
    firstName
    lastName
    avatar
    isPrivate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MeQueryGQL extends Apollo.Query<MeQueryQuery, MeQueryQueryVariables> {
    document = MeQueryDocument;
    
  }
export const PaginateUsersQueryDocument = gql`
    query PaginateUsersQuery($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  paginateUsers(where: $where, skip: $skip, after: $after, before: $before, first: $first, last: $last, orderBy: $orderBy) {
    edges {
      node {
        id
        firstName
        lastName
        avatar
        lastOnline
        status @client
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PaginateUsersQueryGQL extends Apollo.Query<PaginateUsersQueryQuery, PaginateUsersQueryQueryVariables> {
    document = PaginateUsersQueryDocument;
    
  }
export const PartiesQueryDocument = gql`
    query PartiesQuery($where: PartyWhereInput, $orderBy: PartyOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  parties(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    location {
      placeName
      latitude
      longitude
    }
    ...PARTY_FRAGMENT
  }
}
    ${Party_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PartiesQueryGQL extends Apollo.Query<PartiesQueryQuery, PartiesQueryQueryVariables> {
    document = PartiesQueryDocument;
    
  }
export const PartyQueryDocument = gql`
    query PartyQuery($where: PartyWhereUniqueInput!) {
  party(where: $where) {
    location {
      placeName
      latitude
      longitude
    }
    ...PARTY_FRAGMENT
  }
}
    ${Party_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyQueryGQL extends Apollo.Query<PartyQueryQuery, PartyQueryQueryVariables> {
    document = PartyQueryDocument;
    
  }
export const PaginatePartiesQueryDocument = gql`
    query PaginatePartiesQuery($where: PartyWhereInput, $orderBy: PartyOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partiesConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...PARTY_FRAGMENT
      }
    }
  }
}
    ${Party_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PaginatePartiesQueryGQL extends Apollo.Query<PaginatePartiesQueryQuery, PaginatePartiesQueryQueryVariables> {
    document = PaginatePartiesQueryDocument;
    
  }
export const PaginateChatsQueryDocument = gql`
    query PaginateChatsQuery($where: ChatWhereInput, $orderBy: ChatOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  chatsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        party {
          title
        }
        members(first: 3) {
          avatar
          firstName
          lastName
        }
        messages(last: 1) {
          createdAt
          content
          author {
            firstName
            lastName
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PaginateChatsQueryGQL extends Apollo.Query<PaginateChatsQueryQuery, PaginateChatsQueryQueryVariables> {
    document = PaginateChatsQueryDocument;
    
  }
export const PaginateMessagesQueryDocument = gql`
    query PaginateMessagesQuery($where: MessageWhereInput, $orderBy: MessageOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  messagesConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      startCursor
      hasPreviousPage
    }
    edges {
      node {
        ...MESSAGE_FRAGMENT
      }
    }
  }
}
    ${Message_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PaginateMessagesQueryGQL extends Apollo.Query<PaginateMessagesQueryQuery, PaginateMessagesQueryQueryVariables> {
    document = PaginateMessagesQueryDocument;
    
  }
export const PaginateUsersInviteToPartyQueryDocument = gql`
    query PaginateUsersInviteToPartyQuery($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int, $partyInvitationWhere: PartyInvitationWhereInput) {
  paginateUsers(where: $where, skip: $skip, after: $after, before: $before, first: $first, last: $last, orderBy: $orderBy) {
    edges {
      node {
        id
        firstName
        lastName
        avatar
        lastOnline
        status @client
        pendingPartyInvitations(where: $partyInvitationWhere) {
          id
          invitedBy {
            id
          }
          party {
            id
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PaginateUsersInviteToPartyQueryGQL extends Apollo.Query<PaginateUsersInviteToPartyQueryQuery, PaginateUsersInviteToPartyQueryQueryVariables> {
    document = PaginateUsersInviteToPartyQueryDocument;
    
  }
export const PartyInvitationsConnectionQueryDocument = gql`
    query PartyInvitationsConnectionQuery($where: PartyInvitationWhereInput, $orderBy: PartyInvitationOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partyInvitationsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    edges {
      node {
        ...PARTY_INVITATION_FRAGMENT
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
  full: partyInvitationsConnection(where: $where) {
    aggregate {
      count
    }
  }
}
    ${Party_Invitation_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyInvitationsConnectionQueryGQL extends Apollo.Query<PartyInvitationsConnectionQueryQuery, PartyInvitationsConnectionQueryQueryVariables> {
    document = PartyInvitationsConnectionQueryDocument;
    
  }
export const HasChatsQueryDocument = gql`
    query hasChatsQuery($where: ChatWhereInput) {
  hasChats(where: $where)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class HasChatsQueryGQL extends Apollo.Query<HasChatsQueryQuery, HasChatsQueryQueryVariables> {
    document = HasChatsQueryDocument;
    
  }
export const HasPartiesQueryDocument = gql`
    query hasPartiesQuery($where: PartyWhereInput) {
  hasParties(where: $where)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class HasPartiesQueryGQL extends Apollo.Query<HasPartiesQueryQuery, HasPartiesQueryQueryVariables> {
    document = HasPartiesQueryDocument;
    
  }
export const PartyInvitationsQueryDocument = gql`
    query PartyInvitationsQuery($where: PartyInvitationWhereInput, $orderBy: PartyInvitationOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partyInvitations(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    ...PARTY_INVITATION_FRAGMENT
  }
}
    ${Party_Invitation_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyInvitationsQueryGQL extends Apollo.Query<PartyInvitationsQueryQuery, PartyInvitationsQueryQueryVariables> {
    document = PartyInvitationsQueryDocument;
    
  }
export const CanJoinPartyQueryDocument = gql`
    query CanJoinPartyQuery($userId: String!, $inviteSecret: String!, $partyId: String!) {
  canJoinParty(userId: $userId, inviteSecret: $inviteSecret, partyId: $partyId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CanJoinPartyQueryGQL extends Apollo.Query<CanJoinPartyQueryQuery, CanJoinPartyQueryQueryVariables> {
    document = CanJoinPartyQueryDocument;
    
  }
export const Party_SavedTracksDocument = gql`
    query Party_SavedTracks($where: PartySavedTrackWhereInput, $orderBy: PartySavedTrackOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partySavedTracks(where: $where, orderBy: $orderBy, after: $after, skip: $skip, before: $before, first: $first, last: $last) {
    ...FULL_SAVED_TRACK_FRAGMENT
    spotifyId
  }
}
    ${Full_Saved_Track_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_SavedTracksGQL extends Apollo.Query<Party_SavedTracksQuery, Party_SavedTracksQueryVariables> {
    document = Party_SavedTracksDocument;
    
  }
export const ChatMessagesSubscriptionDocument = gql`
    subscription ChatMessagesSubscription($where: MessageSubscriptionWhereInput) {
  message(where: $where) {
    node {
      id
      author {
        firstName
        lastName
        avatar
        id
      }
      isSendByMe @client
      optimisticallyAdded @client
      optimisticallyCreated @client
      hasOptimisticError @client
      content
      createdAt
      chat {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChatMessagesSubscriptionGQL extends Apollo.Subscription<ChatMessagesSubscriptionSubscription, ChatMessagesSubscriptionSubscriptionVariables> {
    document = ChatMessagesSubscriptionDocument;
    
  }
export const PartyInvitationSubscriptionDocument = gql`
    subscription PartyInvitationSubscription($where: PartyInvitationSubscriptionWhereInput) {
  partyInvitation(where: $where) {
    node {
      ...PARTY_INVITATION_FRAGMENT
    }
    previousValues {
      id
      invitedUserId
      partyId
    }
    mutation
  }
}
    ${Party_Invitation_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PartyInvitationSubscriptionGQL extends Apollo.Subscription<PartyInvitationSubscriptionSubscription, PartyInvitationSubscriptionSubscriptionVariables> {
    document = PartyInvitationSubscriptionDocument;
    
  }
export const User_UserInfoDocument = gql`
    mutation User_UserInfo($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class User_UserInfoGQL extends Apollo.Mutation<User_UserInfoMutation, User_UserInfoMutationVariables> {
    document = User_UserInfoDocument;
    
  }
export const User_UpdatePrivacyDocument = gql`
    mutation User_UpdatePrivacy($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(where: $where, data: $data) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class User_UpdatePrivacyGQL extends Apollo.Mutation<User_UpdatePrivacyMutation, User_UpdatePrivacyMutationVariables> {
    document = User_UpdatePrivacyDocument;
    
  }
export const Party_CreatePartyCartItemDocument = gql`
    mutation Party_CreatePartyCartItem($data: PartyCartItemCreateInput!) {
  createPartyCartItem(data: $data) {
    ...PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT
  }
}
    ${Party_Cart_Items_Connection_Node_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_CreatePartyCartItemGQL extends Apollo.Mutation<Party_CreatePartyCartItemMutation, Party_CreatePartyCartItemMutationVariables> {
    document = Party_CreatePartyCartItemDocument;
    
  }
export const Party_DeletePartyCartItemDocument = gql`
    mutation Party_DeletePartyCartItem($where: PartyCartItemWhereUniqueInput!) {
  deletePartyCartItem(where: $where) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_DeletePartyCartItemGQL extends Apollo.Mutation<Party_DeletePartyCartItemMutation, Party_DeletePartyCartItemMutationVariables> {
    document = Party_DeletePartyCartItemDocument;
    
  }
export const Party_CartItemsConnectionDocument = gql`
    query Party_CartItemsConnection($where: PartyCartItemWhereInput, $orderBy: PartyCartItemOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  partyCartItemsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
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
    ${Party_Cart_Items_Connection_Node_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_CartItemsConnectionGQL extends Apollo.Query<Party_CartItemsConnectionQuery, Party_CartItemsConnectionQueryVariables> {
    document = Party_CartItemsConnectionDocument;
    
  }
export const Party_UpdatePartyCartItemDocument = gql`
    mutation Party_UpdatePartyCartItem($data: PartyCartItemUpdateInput!, $where: PartyCartItemWhereUniqueInput!) {
  updatePartyCartItem(data: $data, where: $where) {
    id
    quantity
    price
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_UpdatePartyCartItemGQL extends Apollo.Mutation<Party_UpdatePartyCartItemMutation, Party_UpdatePartyCartItemMutationVariables> {
    document = Party_UpdatePartyCartItemDocument;
    
  }
export const Party_CreatePlaylistDocument = gql`
    mutation Party_CreatePlaylist($data: PlaylistCreateInput!) {
  createPlaylist(data: $data) {
    ...PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT
  }
}
    ${Party_Playlists_Connection_Node_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_CreatePlaylistGQL extends Apollo.Mutation<Party_CreatePlaylistMutation, Party_CreatePlaylistMutationVariables> {
    document = Party_CreatePlaylistDocument;
    
  }
export const Party_CombinePlaylistsDocument = gql`
    mutation Party_CombinePlaylists($partyPlannerData: CombinePlaylistPartyPlannerData!, $spotifyData: CombinePlaylistCreatedSpotifyPlaylistInput!) {
  combinePlaylists(partyPlannerData: $partyPlannerData, spotifyData: $spotifyData) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_CombinePlaylistsGQL extends Apollo.Mutation<Party_CombinePlaylistsMutation, Party_CombinePlaylistsMutationVariables> {
    document = Party_CombinePlaylistsDocument;
    
  }
export const Party_ImportPlaylistsToPartyDocument = gql`
    mutation Party_ImportPlaylistsToParty($playlists: String!, $partyId: ID!) {
  importPlaylistsToParty(playlists: $playlists, partyId: $partyId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_ImportPlaylistsToPartyGQL extends Apollo.Mutation<Party_ImportPlaylistsToPartyMutation, Party_ImportPlaylistsToPartyMutationVariables> {
    document = Party_ImportPlaylistsToPartyDocument;
    
  }
export const Party_PlaylistsConnectionDocument = gql`
    query Party_PlaylistsConnection($where: PlaylistWhereInput, $orderBy: PlaylistOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  playlistsConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ...PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT
        createdAt
      }
    }
  }
}
    ${Party_Playlists_Connection_Node_FragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_PlaylistsConnectionGQL extends Apollo.Query<Party_PlaylistsConnectionQuery, Party_PlaylistsConnectionQueryVariables> {
    document = Party_PlaylistsConnectionDocument;
    
  }
export const Party_LeavePartyDocument = gql`
    mutation Party_LeaveParty($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_LeavePartyGQL extends Apollo.Mutation<Party_LeavePartyMutation, Party_LeavePartyMutationVariables> {
    document = Party_LeavePartyDocument;
    
  }
export const Party_JoinPublicPartyDocument = gql`
    mutation Party_JoinPublicParty($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_JoinPublicPartyGQL extends Apollo.Mutation<Party_JoinPublicPartyMutation, Party_JoinPublicPartyMutationVariables> {
    document = Party_JoinPublicPartyDocument;
    
  }
export const Party_DeletePartyDocument = gql`
    mutation Party_DeleteParty($where: PartyWhereUniqueInput!) {
  deleteParty(where: $where) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Party_DeletePartyGQL extends Apollo.Mutation<Party_DeletePartyMutation, Party_DeletePartyMutationVariables> {
    document = Party_DeletePartyDocument;
    
  }
export const User_PeopleConnectionDocument = gql`
    query User_PeopleConnection($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
  usersConnection(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        firstName
        lastName
        avatar
        createdAt
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class User_PeopleConnectionGQL extends Apollo.Query<User_PeopleConnectionQuery, User_PeopleConnectionQueryVariables> {
    document = User_PeopleConnectionDocument;
    
  }