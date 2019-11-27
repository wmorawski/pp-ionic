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
  /** 
 * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
 **/
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

export type AggregateGame = {
   __typename?: 'AggregateGame',
  count: Scalars['Int'],
};

export type AggregateImage = {
   __typename?: 'AggregateImage',
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

export type Album = Node & {
   __typename?: 'Album',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
  releaseDate: Scalars['String'],
  imageUrl: Scalars['String'],
};

/** A connection to a list of items. */
export type AlbumConnection = {
   __typename?: 'AlbumConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
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

/** An edge in a connection. */
export type AlbumEdge = {
   __typename?: 'AlbumEdge',
  /** The item at the end of the edge. */
  node: Album,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AlbumSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AlbumSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AlbumSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<AlbumWhereInput>,
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
  connect?: Maybe<AlbumWhereUniqueInput>,
  update?: Maybe<AlbumUpdateDataInput>,
  upsert?: Maybe<AlbumUpsertNestedInput>,
};

export type AlbumUpsertNestedInput = {
  update: AlbumUpdateDataInput,
  create: AlbumCreateInput,
};

export type AlbumWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AlbumWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AlbumWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AlbumWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  spotifyId_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  spotifyId_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  spotifyId_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  spotifyId_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  spotifyId_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  spotifyId_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  uri_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  uri_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  uri_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  uri_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  uri_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  uri_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  uri_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  uri_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  uri_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  uri_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  uri_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  uri_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  releaseDate?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  releaseDate_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  releaseDate_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  releaseDate_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  releaseDate_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  releaseDate_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  releaseDate_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  releaseDate_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  releaseDate_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  releaseDate_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  releaseDate_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  releaseDate_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  releaseDate_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  releaseDate_not_ends_with?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  imageUrl_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  imageUrl_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  imageUrl_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  imageUrl_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  imageUrl_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  imageUrl_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
};

export type AlbumWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Artist = Node & {
   __typename?: 'Artist',
  id: Scalars['ID'],
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  name: Scalars['String'],
};

/** A connection to a list of items. */
export type ArtistConnection = {
   __typename?: 'ArtistConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
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

/** An edge in a connection. */
export type ArtistEdge = {
   __typename?: 'ArtistEdge',
  /** The item at the end of the edge. */
  node: Artist,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArtistScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArtistScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArtistScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  spotifyId_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  spotifyId_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  spotifyId_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  spotifyId_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  spotifyId_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  spotifyId_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  uri_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  uri_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  uri_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  uri_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  uri_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  uri_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  uri_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  uri_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  uri_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  uri_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  uri_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  uri_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
};

export type ArtistSubscriptionPayload = {
   __typename?: 'ArtistSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Artist>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ArtistPreviousValues>,
};

export type ArtistSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArtistSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArtistSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArtistSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ArtistWhereInput>,
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
  connect?: Maybe<Array<ArtistWhereUniqueInput>>,
  set?: Maybe<Array<ArtistWhereUniqueInput>>,
  disconnect?: Maybe<Array<ArtistWhereUniqueInput>>,
  delete?: Maybe<Array<ArtistWhereUniqueInput>>,
  update?: Maybe<Array<ArtistUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<ArtistUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<ArtistScalarWhereInput>>,
  upsert?: Maybe<Array<ArtistUpsertWithWhereUniqueNestedInput>>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArtistWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArtistWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArtistWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  spotifyId_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  spotifyId_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  spotifyId_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  spotifyId_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  spotifyId_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  spotifyId_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  uri_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  uri_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  uri_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  uri_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  uri_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  uri_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  uri_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  uri_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  uri_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  uri_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  uri_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  uri_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
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
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'],
};

export type Chat = Node & {
   __typename?: 'Chat',
  id: Scalars['ID'],
  party: Party,
  members?: Maybe<Array<User>>,
  messages?: Maybe<Array<Message>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  hasUnreadMessages: Scalars['Boolean'],
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

/** A connection to a list of items. */
export type ChatConnection = {
   __typename?: 'ChatConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
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

/** An edge in a connection. */
export type ChatEdge = {
   __typename?: 'ChatEdge',
  /** The item at the end of the edge. */
  node: Chat,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type ChatSubscriptionPayload = {
   __typename?: 'ChatSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Chat>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ChatPreviousValues>,
};

export type ChatSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ChatWhereInput>,
};

export type ChatUpdateInput = {
  party?: Maybe<PartyUpdateOneRequiredInput>,
  members?: Maybe<UserUpdateManyWithoutChatsInput>,
  messages?: Maybe<MessageUpdateManyWithoutChatInput>,
};

export type ChatUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<ChatCreateWithoutMembersInput>>,
  connect?: Maybe<Array<ChatWhereUniqueInput>>,
  set?: Maybe<Array<ChatWhereUniqueInput>>,
  disconnect?: Maybe<Array<ChatWhereUniqueInput>>,
  delete?: Maybe<Array<ChatWhereUniqueInput>>,
  update?: Maybe<Array<ChatUpdateWithWhereUniqueWithoutMembersInput>>,
  deleteMany?: Maybe<Array<ChatScalarWhereInput>>,
  upsert?: Maybe<Array<ChatUpsertWithWhereUniqueWithoutMembersInput>>,
};

export type ChatUpdateOneRequiredWithoutMessagesInput = {
  create?: Maybe<ChatCreateWithoutMessagesInput>,
  connect?: Maybe<ChatWhereUniqueInput>,
  update?: Maybe<ChatUpdateWithoutMessagesDataInput>,
  upsert?: Maybe<ChatUpsertWithoutMessagesInput>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  party?: Maybe<PartyWhereInput>,
  members_every?: Maybe<UserWhereInput>,
  members_some?: Maybe<UserWhereInput>,
  members_none?: Maybe<UserWhereInput>,
  messages_every?: Maybe<MessageWhereInput>,
  messages_some?: Maybe<MessageWhereInput>,
  messages_none?: Maybe<MessageWhereInput>,
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


export type FriendInvitation = Node & {
   __typename?: 'FriendInvitation',
  id: Scalars['ID'],
  invitedBy: User,
  user: User,
  createdAt: Scalars['DateTime'],
  invitedUserId: Scalars['String'],
};

/** A connection to a list of items. */
export type FriendInvitationConnection = {
   __typename?: 'FriendInvitationConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<FriendInvitationEdge>>,
  aggregate: AggregateFriendInvitation,
};

export type FriendInvitationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  invitedUserId: Scalars['String'],
  invitedBy: UserCreateOneInput,
  user: UserCreateOneWithoutPendingFriendInvitationsInput,
};

export type FriendInvitationCreateManyWithoutUserInput = {
  create?: Maybe<Array<FriendInvitationCreateWithoutUserInput>>,
  connect?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
};

export type FriendInvitationCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  invitedUserId: Scalars['String'],
  invitedBy: UserCreateOneInput,
};

/** An edge in a connection. */
export type FriendInvitationEdge = {
   __typename?: 'FriendInvitationEdge',
  /** The item at the end of the edge. */
  node: FriendInvitation,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FriendInvitationScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FriendInvitationScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FriendInvitationScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  invitedUserId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  invitedUserId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  invitedUserId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  invitedUserId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  invitedUserId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  invitedUserId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  invitedUserId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  invitedUserId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  invitedUserId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  invitedUserId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  invitedUserId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>,
};

export type FriendInvitationSubscriptionPayload = {
   __typename?: 'FriendInvitationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<FriendInvitation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<FriendInvitationPreviousValues>,
};

export type FriendInvitationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FriendInvitationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FriendInvitationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FriendInvitationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<FriendInvitationWhereInput>,
};

export type FriendInvitationUpdateInput = {
  invitedUserId?: Maybe<Scalars['String']>,
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutPendingFriendInvitationsInput>,
};

export type FriendInvitationUpdateManyDataInput = {
  invitedUserId?: Maybe<Scalars['String']>,
};

export type FriendInvitationUpdateManyMutationInput = {
  invitedUserId?: Maybe<Scalars['String']>,
};

export type FriendInvitationUpdateManyWithoutUserInput = {
  create?: Maybe<Array<FriendInvitationCreateWithoutUserInput>>,
  connect?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  set?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  disconnect?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  delete?: Maybe<Array<FriendInvitationWhereUniqueInput>>,
  update?: Maybe<Array<FriendInvitationUpdateWithWhereUniqueWithoutUserInput>>,
  updateMany?: Maybe<Array<FriendInvitationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<FriendInvitationScalarWhereInput>>,
  upsert?: Maybe<Array<FriendInvitationUpsertWithWhereUniqueWithoutUserInput>>,
};

export type FriendInvitationUpdateManyWithWhereNestedInput = {
  where: FriendInvitationScalarWhereInput,
  data: FriendInvitationUpdateManyDataInput,
};

export type FriendInvitationUpdateWithoutUserDataInput = {
  invitedUserId?: Maybe<Scalars['String']>,
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FriendInvitationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FriendInvitationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FriendInvitationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  invitedUserId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  invitedUserId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  invitedUserId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  invitedUserId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  invitedUserId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  invitedUserId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  invitedUserId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  invitedUserId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  invitedUserId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  invitedUserId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  invitedUserId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>,
  invitedBy?: Maybe<UserWhereInput>,
  user?: Maybe<UserWhereInput>,
};

export type FriendInvitationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Game = Node & {
   __typename?: 'Game',
  id: Scalars['ID'],
  title: Scalars['String'],
  cover?: Maybe<Scalars['String']>,
  type: GameType,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

/** A connection to a list of items. */
export type GameConnection = {
   __typename?: 'GameConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<GameEdge>>,
  aggregate: AggregateGame,
};

export type GameCreateInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  cover?: Maybe<Scalars['String']>,
  type: GameType,
};

export type GameCreateManyInput = {
  create?: Maybe<Array<GameCreateInput>>,
  connect?: Maybe<Array<GameWhereUniqueInput>>,
};

/** An edge in a connection. */
export type GameEdge = {
   __typename?: 'GameEdge',
  /** The item at the end of the edge. */
  node: Game,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum GameOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CoverAsc = 'cover_ASC',
  CoverDesc = 'cover_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GamePreviousValues = {
   __typename?: 'GamePreviousValues',
  id: Scalars['ID'],
  title: Scalars['String'],
  cover?: Maybe<Scalars['String']>,
  type: GameType,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type GameScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GameScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GameScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GameScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  cover_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  cover_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  cover_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  cover_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  cover_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  cover_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  cover_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  cover_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  cover_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  cover_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  cover_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  cover_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  cover_not_ends_with?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
  /** All values that are not equal to given value. */
  type_not?: Maybe<GameType>,
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<GameType>>,
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<GameType>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type GameSubscriptionPayload = {
   __typename?: 'GameSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Game>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<GamePreviousValues>,
};

export type GameSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GameSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GameSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GameSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<GameWhereInput>,
};

export enum GameType {
  Board = 'BOARD',
  Pc = 'PC',
  Console = 'CONSOLE'
}

export type GameUpdateDataInput = {
  title?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
};

export type GameUpdateInput = {
  title?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
};

export type GameUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
};

export type GameUpdateManyInput = {
  create?: Maybe<Array<GameCreateInput>>,
  connect?: Maybe<Array<GameWhereUniqueInput>>,
  set?: Maybe<Array<GameWhereUniqueInput>>,
  disconnect?: Maybe<Array<GameWhereUniqueInput>>,
  delete?: Maybe<Array<GameWhereUniqueInput>>,
  update?: Maybe<Array<GameUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<GameUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<GameScalarWhereInput>>,
  upsert?: Maybe<Array<GameUpsertWithWhereUniqueNestedInput>>,
};

export type GameUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
};

export type GameUpdateManyWithWhereNestedInput = {
  where: GameScalarWhereInput,
  data: GameUpdateManyDataInput,
};

export type GameUpdateWithWhereUniqueNestedInput = {
  where: GameWhereUniqueInput,
  data: GameUpdateDataInput,
};

export type GameUpsertWithWhereUniqueNestedInput = {
  where: GameWhereUniqueInput,
  update: GameUpdateDataInput,
  create: GameCreateInput,
};

export type GameWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GameWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GameWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GameWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  cover_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  cover_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  cover_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  cover_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  cover_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  cover_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  cover_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  cover_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  cover_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  cover_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  cover_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  cover_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  cover_not_ends_with?: Maybe<Scalars['String']>,
  type?: Maybe<GameType>,
  /** All values that are not equal to given value. */
  type_not?: Maybe<GameType>,
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<GameType>>,
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<GameType>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type GameWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type Image = Node & {
   __typename?: 'Image',
  id: Scalars['ID'],
  height: Scalars['Int'],
  width: Scalars['Int'],
  url: Scalars['String'],
};

/** A connection to a list of items. */
export type ImageConnection = {
   __typename?: 'ImageConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<ImageEdge>>,
  aggregate: AggregateImage,
};

export type ImageCreateInput = {
  id?: Maybe<Scalars['ID']>,
  height: Scalars['Int'],
  width: Scalars['Int'],
  url: Scalars['String'],
};

/** An edge in a connection. */
export type ImageEdge = {
   __typename?: 'ImageEdge',
  /** The item at the end of the edge. */
  node: Image,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum ImageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ImagePreviousValues = {
   __typename?: 'ImagePreviousValues',
  id: Scalars['ID'],
  height: Scalars['Int'],
  width: Scalars['Int'],
  url: Scalars['String'],
};

export type ImageSubscriptionPayload = {
   __typename?: 'ImageSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Image>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<ImagePreviousValues>,
};

export type ImageSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImageSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ImageSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ImageSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ImageWhereInput>,
};

export type ImageUpdateInput = {
  height?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
};

export type ImageUpdateManyMutationInput = {
  height?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
};

export type ImageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ImageWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ImageWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ImageWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  height?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Int']>,
  width?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Location = Node & {
   __typename?: 'Location',
  id: Scalars['ID'],
  placeName: Scalars['String'],
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

/** A connection to a list of items. */
export type LocationConnection = {
   __typename?: 'LocationConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
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

/** An edge in a connection. */
export type LocationEdge = {
   __typename?: 'LocationEdge',
  /** The item at the end of the edge. */
  node: Location,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LocationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LocationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LocationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<LocationWhereInput>,
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
  connect?: Maybe<LocationWhereUniqueInput>,
  update?: Maybe<LocationUpdateDataInput>,
  upsert?: Maybe<LocationUpsertNestedInput>,
};

export type LocationUpsertNestedInput = {
  update: LocationUpdateDataInput,
  create: LocationCreateInput,
};

export type LocationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LocationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LocationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LocationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  placeName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  placeName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  placeName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  placeName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  placeName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  placeName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  placeName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  placeName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  placeName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  placeName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  placeName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  placeName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  placeName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  placeName_not_ends_with?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  latitude_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  latitude_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  latitude_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  latitude_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  latitude_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  latitude_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  latitude_gte?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  longitude_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  longitude_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  longitude_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  longitude_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  longitude_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  longitude_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  longitude_gte?: Maybe<Scalars['Float']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Message = Node & {
   __typename?: 'Message',
  id: Scalars['ID'],
  author: User,
  chat: Chat,
  content: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  isSendByMe: Scalars['Boolean'],
  optimisticallyAdded: Scalars['Boolean'],
  optimisticallyCreated: Scalars['Boolean'],
  hasOptimisticError: Scalars['Boolean'],
};

/** A connection to a list of items. */
export type MessageConnection = {
   __typename?: 'MessageConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<MessageEdge>>,
  aggregate: AggregateMessage,
};

export type MessageCreateInput = {
  id?: Maybe<Scalars['ID']>,
  content: Scalars['String'],
  author: UserCreateOneInput,
  chat: ChatCreateOneWithoutMessagesInput,
};

export type MessageCreateManyWithoutChatInput = {
  create?: Maybe<Array<MessageCreateWithoutChatInput>>,
  connect?: Maybe<Array<MessageWhereUniqueInput>>,
};

export type MessageCreateWithoutChatInput = {
  id?: Maybe<Scalars['ID']>,
  content: Scalars['String'],
  author: UserCreateOneInput,
};

/** An edge in a connection. */
export type MessageEdge = {
   __typename?: 'MessageEdge',
  /** The item at the end of the edge. */
  node: Message,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MessageScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MessageScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MessageScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  content?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type MessageSubscriptionPayload = {
   __typename?: 'MessageSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Message>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MessagePreviousValues>,
};

export type MessageSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MessageSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MessageSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MessageSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MessageWhereInput>,
};

export type MessageUpdateInput = {
  content?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  chat?: Maybe<ChatUpdateOneRequiredWithoutMessagesInput>,
};

export type MessageUpdateManyDataInput = {
  content?: Maybe<Scalars['String']>,
};

export type MessageUpdateManyMutationInput = {
  content?: Maybe<Scalars['String']>,
};

export type MessageUpdateManyWithoutChatInput = {
  create?: Maybe<Array<MessageCreateWithoutChatInput>>,
  connect?: Maybe<Array<MessageWhereUniqueInput>>,
  set?: Maybe<Array<MessageWhereUniqueInput>>,
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>,
  delete?: Maybe<Array<MessageWhereUniqueInput>>,
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutChatInput>>,
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>,
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutChatInput>>,
};

export type MessageUpdateManyWithWhereNestedInput = {
  where: MessageScalarWhereInput,
  data: MessageUpdateManyDataInput,
};

export type MessageUpdateWithoutChatDataInput = {
  content?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MessageWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MessageWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MessageWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  content?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  author?: Maybe<UserWhereInput>,
  chat?: Maybe<ChatWhereInput>,
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createMessage: Message,
  createPartyInvitation: PartyInvitation,
  createFriendInvitation: FriendInvitation,
  createChat: Chat,
  createPlaylist: Playlist,
  createPartyCart: PartyCart,
  createPartyCartItem: PartyCartItem,
  createTrack: Track,
  createImage: Image,
  createArtist: Artist,
  createLocation: Location,
  createGame: Game,
  createPartySavedTrack: PartySavedTrack,
  createUser: User,
  createParty: Party,
  createAlbum: Album,
  updateMessage?: Maybe<Message>,
  updatePartyInvitation?: Maybe<PartyInvitation>,
  updateFriendInvitation?: Maybe<FriendInvitation>,
  updateChat?: Maybe<Chat>,
  updatePlaylist?: Maybe<Playlist>,
  updatePartyCart?: Maybe<PartyCart>,
  updatePartyCartItem?: Maybe<PartyCartItem>,
  updateTrack?: Maybe<Track>,
  updateImage?: Maybe<Image>,
  updateArtist?: Maybe<Artist>,
  updateLocation?: Maybe<Location>,
  updateGame?: Maybe<Game>,
  updatePartySavedTrack?: Maybe<PartySavedTrack>,
  updateUser?: Maybe<User>,
  updateParty?: Maybe<Party>,
  updateAlbum?: Maybe<Album>,
  deleteMessage?: Maybe<Message>,
  deletePartyInvitation?: Maybe<PartyInvitation>,
  deleteFriendInvitation?: Maybe<FriendInvitation>,
  deleteChat?: Maybe<Chat>,
  deletePlaylist?: Maybe<Playlist>,
  deletePartyCart?: Maybe<PartyCart>,
  deletePartyCartItem?: Maybe<PartyCartItem>,
  deleteTrack?: Maybe<Track>,
  deleteImage?: Maybe<Image>,
  deleteArtist?: Maybe<Artist>,
  deleteLocation?: Maybe<Location>,
  deleteGame?: Maybe<Game>,
  deletePartySavedTrack?: Maybe<PartySavedTrack>,
  deleteUser?: Maybe<User>,
  deleteParty?: Maybe<Party>,
  deleteAlbum?: Maybe<Album>,
  upsertMessage: Message,
  upsertPartyInvitation: PartyInvitation,
  upsertFriendInvitation: FriendInvitation,
  upsertChat: Chat,
  upsertPlaylist: Playlist,
  upsertPartyCart: PartyCart,
  upsertPartyCartItem: PartyCartItem,
  upsertTrack: Track,
  upsertImage: Image,
  upsertArtist: Artist,
  upsertLocation: Location,
  upsertGame: Game,
  upsertPartySavedTrack: PartySavedTrack,
  upsertUser: User,
  upsertParty: Party,
  upsertAlbum: Album,
  updateManyMessages: BatchPayload,
  updateManyPartyInvitations: BatchPayload,
  updateManyFriendInvitations: BatchPayload,
  updateManyPlaylists: BatchPayload,
  updateManyPartyCartItems: BatchPayload,
  updateManyTracks: BatchPayload,
  updateManyImages: BatchPayload,
  updateManyArtists: BatchPayload,
  updateManyLocations: BatchPayload,
  updateManyGames: BatchPayload,
  updateManyPartySavedTracks: BatchPayload,
  updateManyUsers: BatchPayload,
  updateManyParties: BatchPayload,
  updateManyAlbums: BatchPayload,
  deleteManyMessages: BatchPayload,
  deleteManyPartyInvitations: BatchPayload,
  deleteManyFriendInvitations: BatchPayload,
  deleteManyChats: BatchPayload,
  deleteManyPlaylists: BatchPayload,
  deleteManyPartyCarts: BatchPayload,
  deleteManyPartyCartItems: BatchPayload,
  deleteManyTracks: BatchPayload,
  deleteManyImages: BatchPayload,
  deleteManyArtists: BatchPayload,
  deleteManyLocations: BatchPayload,
  deleteManyGames: BatchPayload,
  deleteManyPartySavedTracks: BatchPayload,
  deleteManyUsers: BatchPayload,
  deleteManyParties: BatchPayload,
  deleteManyAlbums: BatchPayload,
  joinParty?: Maybe<Scalars['Boolean']>,
  importPlaylistsToParty: Scalars['Boolean'],
  combinePlaylists: Playlist,
  signup: AuthPayload,
  login: AuthPayload,
  socialLogin: AuthPayload,
  updateMe: User,
  requestReset?: Maybe<SuccessMessage>,
  acceptFriendInvitation?: Maybe<Scalars['Boolean']>,
  unfriendPerson?: Maybe<Scalars['Boolean']>,
  resetPassword?: Maybe<AuthPayload>,
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput
};


export type MutationCreatePartyInvitationArgs = {
  data: PartyInvitationCreateInput
};


export type MutationCreateFriendInvitationArgs = {
  data: FriendInvitationCreateInput
};


export type MutationCreateChatArgs = {
  data: ChatCreateInput
};


export type MutationCreatePlaylistArgs = {
  data: PlaylistCreateInput
};


export type MutationCreatePartyCartArgs = {
  data: PartyCartCreateInput
};


export type MutationCreatePartyCartItemArgs = {
  data: PartyCartItemCreateInput
};


export type MutationCreateTrackArgs = {
  data: TrackCreateInput
};


export type MutationCreateImageArgs = {
  data: ImageCreateInput
};


export type MutationCreateArtistArgs = {
  data: ArtistCreateInput
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput
};


export type MutationCreateGameArgs = {
  data: GameCreateInput
};


export type MutationCreatePartySavedTrackArgs = {
  data: PartySavedTrackCreateInput
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationCreatePartyArgs = {
  data: PartyCreateInput
};


export type MutationCreateAlbumArgs = {
  data: AlbumCreateInput
};


export type MutationUpdateMessageArgs = {
  data: MessageUpdateInput,
  where: MessageWhereUniqueInput
};


export type MutationUpdatePartyInvitationArgs = {
  data: PartyInvitationUpdateInput,
  where: PartyInvitationWhereUniqueInput
};


export type MutationUpdateFriendInvitationArgs = {
  data: FriendInvitationUpdateInput,
  where: FriendInvitationWhereUniqueInput
};


export type MutationUpdateChatArgs = {
  data: ChatUpdateInput,
  where: ChatWhereUniqueInput
};


export type MutationUpdatePlaylistArgs = {
  data: PlaylistUpdateInput,
  where: PlaylistWhereUniqueInput
};


export type MutationUpdatePartyCartArgs = {
  data: PartyCartUpdateInput,
  where: PartyCartWhereUniqueInput
};


export type MutationUpdatePartyCartItemArgs = {
  data: PartyCartItemUpdateInput,
  where: PartyCartItemWhereUniqueInput
};


export type MutationUpdateTrackArgs = {
  data: TrackUpdateInput,
  where: TrackWhereUniqueInput
};


export type MutationUpdateImageArgs = {
  data: ImageUpdateInput,
  where: ImageWhereUniqueInput
};


export type MutationUpdateArtistArgs = {
  data: ArtistUpdateInput,
  where: ArtistWhereUniqueInput
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput,
  where: LocationWhereUniqueInput
};


export type MutationUpdateGameArgs = {
  data: GameUpdateInput,
  where: GameWhereUniqueInput
};


export type MutationUpdatePartySavedTrackArgs = {
  data: PartySavedTrackUpdateInput,
  where: PartySavedTrackWhereUniqueInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdatePartyArgs = {
  data: PartyUpdateInput,
  where: PartyWhereUniqueInput
};


export type MutationUpdateAlbumArgs = {
  data: AlbumUpdateInput,
  where: AlbumWhereUniqueInput
};


export type MutationDeleteMessageArgs = {
  where: MessageWhereUniqueInput
};


export type MutationDeletePartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput
};


export type MutationDeleteFriendInvitationArgs = {
  where: FriendInvitationWhereUniqueInput
};


export type MutationDeleteChatArgs = {
  where: ChatWhereUniqueInput
};


export type MutationDeletePlaylistArgs = {
  where: PlaylistWhereUniqueInput
};


export type MutationDeletePartyCartArgs = {
  where: PartyCartWhereUniqueInput
};


export type MutationDeletePartyCartItemArgs = {
  where: PartyCartItemWhereUniqueInput
};


export type MutationDeleteTrackArgs = {
  where: TrackWhereUniqueInput
};


export type MutationDeleteImageArgs = {
  where: ImageWhereUniqueInput
};


export type MutationDeleteArtistArgs = {
  where: ArtistWhereUniqueInput
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput
};


export type MutationDeleteGameArgs = {
  where: GameWhereUniqueInput
};


export type MutationDeletePartySavedTrackArgs = {
  where: PartySavedTrackWhereUniqueInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeletePartyArgs = {
  where: PartyWhereUniqueInput
};


export type MutationDeleteAlbumArgs = {
  where: AlbumWhereUniqueInput
};


export type MutationUpsertMessageArgs = {
  where: MessageWhereUniqueInput,
  create: MessageCreateInput,
  update: MessageUpdateInput
};


export type MutationUpsertPartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput,
  create: PartyInvitationCreateInput,
  update: PartyInvitationUpdateInput
};


export type MutationUpsertFriendInvitationArgs = {
  where: FriendInvitationWhereUniqueInput,
  create: FriendInvitationCreateInput,
  update: FriendInvitationUpdateInput
};


export type MutationUpsertChatArgs = {
  where: ChatWhereUniqueInput,
  create: ChatCreateInput,
  update: ChatUpdateInput
};


export type MutationUpsertPlaylistArgs = {
  where: PlaylistWhereUniqueInput,
  create: PlaylistCreateInput,
  update: PlaylistUpdateInput
};


export type MutationUpsertPartyCartArgs = {
  where: PartyCartWhereUniqueInput,
  create: PartyCartCreateInput,
  update: PartyCartUpdateInput
};


export type MutationUpsertPartyCartItemArgs = {
  where: PartyCartItemWhereUniqueInput,
  create: PartyCartItemCreateInput,
  update: PartyCartItemUpdateInput
};


export type MutationUpsertTrackArgs = {
  where: TrackWhereUniqueInput,
  create: TrackCreateInput,
  update: TrackUpdateInput
};


export type MutationUpsertImageArgs = {
  where: ImageWhereUniqueInput,
  create: ImageCreateInput,
  update: ImageUpdateInput
};


export type MutationUpsertArtistArgs = {
  where: ArtistWhereUniqueInput,
  create: ArtistCreateInput,
  update: ArtistUpdateInput
};


export type MutationUpsertLocationArgs = {
  where: LocationWhereUniqueInput,
  create: LocationCreateInput,
  update: LocationUpdateInput
};


export type MutationUpsertGameArgs = {
  where: GameWhereUniqueInput,
  create: GameCreateInput,
  update: GameUpdateInput
};


export type MutationUpsertPartySavedTrackArgs = {
  where: PartySavedTrackWhereUniqueInput,
  create: PartySavedTrackCreateInput,
  update: PartySavedTrackUpdateInput
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationUpsertPartyArgs = {
  where: PartyWhereUniqueInput,
  create: PartyCreateInput,
  update: PartyUpdateInput
};


export type MutationUpsertAlbumArgs = {
  where: AlbumWhereUniqueInput,
  create: AlbumCreateInput,
  update: AlbumUpdateInput
};


export type MutationUpdateManyMessagesArgs = {
  data: MessageUpdateManyMutationInput,
  where?: Maybe<MessageWhereInput>
};


export type MutationUpdateManyPartyInvitationsArgs = {
  data: PartyInvitationUpdateManyMutationInput,
  where?: Maybe<PartyInvitationWhereInput>
};


export type MutationUpdateManyFriendInvitationsArgs = {
  data: FriendInvitationUpdateManyMutationInput,
  where?: Maybe<FriendInvitationWhereInput>
};


export type MutationUpdateManyPlaylistsArgs = {
  data: PlaylistUpdateManyMutationInput,
  where?: Maybe<PlaylistWhereInput>
};


export type MutationUpdateManyPartyCartItemsArgs = {
  data: PartyCartItemUpdateManyMutationInput,
  where?: Maybe<PartyCartItemWhereInput>
};


export type MutationUpdateManyTracksArgs = {
  data: TrackUpdateManyMutationInput,
  where?: Maybe<TrackWhereInput>
};


export type MutationUpdateManyImagesArgs = {
  data: ImageUpdateManyMutationInput,
  where?: Maybe<ImageWhereInput>
};


export type MutationUpdateManyArtistsArgs = {
  data: ArtistUpdateManyMutationInput,
  where?: Maybe<ArtistWhereInput>
};


export type MutationUpdateManyLocationsArgs = {
  data: LocationUpdateManyMutationInput,
  where?: Maybe<LocationWhereInput>
};


export type MutationUpdateManyGamesArgs = {
  data: GameUpdateManyMutationInput,
  where?: Maybe<GameWhereInput>
};


export type MutationUpdateManyPartySavedTracksArgs = {
  data: PartySavedTrackUpdateManyMutationInput,
  where?: Maybe<PartySavedTrackWhereInput>
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpdateManyPartiesArgs = {
  data: PartyUpdateManyMutationInput,
  where?: Maybe<PartyWhereInput>
};


export type MutationUpdateManyAlbumsArgs = {
  data: AlbumUpdateManyMutationInput,
  where?: Maybe<AlbumWhereInput>
};


export type MutationDeleteManyMessagesArgs = {
  where?: Maybe<MessageWhereInput>
};


export type MutationDeleteManyPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>
};


export type MutationDeleteManyFriendInvitationsArgs = {
  where?: Maybe<FriendInvitationWhereInput>
};


export type MutationDeleteManyChatsArgs = {
  where?: Maybe<ChatWhereInput>
};


export type MutationDeleteManyPlaylistsArgs = {
  where?: Maybe<PlaylistWhereInput>
};


export type MutationDeleteManyPartyCartsArgs = {
  where?: Maybe<PartyCartWhereInput>
};


export type MutationDeleteManyPartyCartItemsArgs = {
  where?: Maybe<PartyCartItemWhereInput>
};


export type MutationDeleteManyTracksArgs = {
  where?: Maybe<TrackWhereInput>
};


export type MutationDeleteManyImagesArgs = {
  where?: Maybe<ImageWhereInput>
};


export type MutationDeleteManyArtistsArgs = {
  where?: Maybe<ArtistWhereInput>
};


export type MutationDeleteManyLocationsArgs = {
  where?: Maybe<LocationWhereInput>
};


export type MutationDeleteManyGamesArgs = {
  where?: Maybe<GameWhereInput>
};


export type MutationDeleteManyPartySavedTracksArgs = {
  where?: Maybe<PartySavedTrackWhereInput>
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationDeleteManyPartiesArgs = {
  where?: Maybe<PartyWhereInput>
};


export type MutationDeleteManyAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>
};


export type MutationJoinPartyArgs = {
  partyId: Scalars['ID']
};


export type MutationImportPlaylistsToPartyArgs = {
  playlists: Scalars['String'],
  partyId: Scalars['ID']
};


export type MutationCombinePlaylistsArgs = {
  partyPlannerData: CombinePlaylistPartyPlannerData,
  spotifyData: CombinePlaylistCreatedSpotifyPlaylistInput
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
  id: Scalars['String']
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

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'],
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
};

export type Party = Node & {
   __typename?: 'Party',
  id: Scalars['ID'],
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  author: User,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  location: Location,
  games?: Maybe<Array<Game>>,
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


export type PartyGamesArgs = {
  where?: Maybe<GameWhereInput>,
  orderBy?: Maybe<GameOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
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

export type PartyCart = Node & {
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

/** A connection to a list of items. */
export type PartyCartConnection = {
   __typename?: 'PartyCartConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
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

/** An edge in a connection. */
export type PartyCartEdge = {
   __typename?: 'PartyCartEdge',
  /** The item at the end of the edge. */
  node: PartyCart,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type PartyCartItem = Node & {
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

/** A connection to a list of items. */
export type PartyCartItemConnection = {
   __typename?: 'PartyCartItemConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PartyCartItemEdge>>,
  aggregate: AggregatePartyCartItem,
};

export type PartyCartItemCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
  quantity?: Maybe<Scalars['Int']>,
  cart: PartyCartCreateOneWithoutItemsInput,
  user: UserCreateOneWithoutCartItemsInput,
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
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
  quantity?: Maybe<Scalars['Int']>,
  user: UserCreateOneWithoutCartItemsInput,
};

export type PartyCartItemCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  price: Scalars['Float'],
  status: PartyCartItemStatus,
  quantity?: Maybe<Scalars['Int']>,
  cart: PartyCartCreateOneWithoutItemsInput,
};

/** An edge in a connection. */
export type PartyCartItemEdge = {
   __typename?: 'PartyCartItemEdge',
  /** The item at the end of the edge. */
  node: PartyCartItem,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<PartyCartItemStatus>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<PartyCartItemStatus>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<PartyCartItemStatus>>,
  quantity?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  quantity_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  quantity_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  quantity_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  quantity_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  quantity_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  quantity_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  quantity_gte?: Maybe<Scalars['Int']>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyCartItemSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyCartItemSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyCartItemSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyCartItemWhereInput>,
};

export type PartyCartItemUpdateInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutItemsInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutCartItemsInput>,
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
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  set?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  delete?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  update?: Maybe<Array<PartyCartItemUpdateWithWhereUniqueWithoutCartInput>>,
  updateMany?: Maybe<Array<PartyCartItemUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  upsert?: Maybe<Array<PartyCartItemUpsertWithWhereUniqueWithoutCartInput>>,
};

export type PartyCartItemUpdateManyWithoutUserInput = {
  create?: Maybe<Array<PartyCartItemCreateWithoutUserInput>>,
  connect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  set?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  delete?: Maybe<Array<PartyCartItemWhereUniqueInput>>,
  update?: Maybe<Array<PartyCartItemUpdateWithWhereUniqueWithoutUserInput>>,
  updateMany?: Maybe<Array<PartyCartItemUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PartyCartItemScalarWhereInput>>,
  upsert?: Maybe<Array<PartyCartItemUpsertWithWhereUniqueWithoutUserInput>>,
};

export type PartyCartItemUpdateManyWithWhereNestedInput = {
  where: PartyCartItemScalarWhereInput,
  data: PartyCartItemUpdateManyDataInput,
};

export type PartyCartItemUpdateWithoutCartDataInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
  user?: Maybe<UserUpdateOneRequiredWithoutCartItemsInput>,
};

export type PartyCartItemUpdateWithoutUserDataInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  quantity?: Maybe<Scalars['Int']>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutItemsInput>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyCartItemWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyCartItemWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyCartItemWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Float']>,
  status?: Maybe<PartyCartItemStatus>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<PartyCartItemStatus>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<PartyCartItemStatus>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<PartyCartItemStatus>>,
  quantity?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  quantity_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  quantity_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  quantity_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  quantity_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  quantity_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  quantity_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  quantity_gte?: Maybe<Scalars['Int']>,
  cart?: Maybe<PartyCartWhereInput>,
  user?: Maybe<UserWhereInput>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyCartSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyCartSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyCartSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyCartWhereInput>,
};

export type PartyCartUpdateInput = {
  party?: Maybe<PartyUpdateOneRequiredWithoutCartInput>,
  items?: Maybe<PartyCartItemUpdateManyWithoutCartInput>,
};

export type PartyCartUpdateOneRequiredWithoutItemsInput = {
  create?: Maybe<PartyCartCreateWithoutItemsInput>,
  connect?: Maybe<PartyCartWhereUniqueInput>,
  update?: Maybe<PartyCartUpdateWithoutItemsDataInput>,
  upsert?: Maybe<PartyCartUpsertWithoutItemsInput>,
};

export type PartyCartUpdateOneRequiredWithoutPartyInput = {
  create?: Maybe<PartyCartCreateWithoutPartyInput>,
  connect?: Maybe<PartyCartWhereUniqueInput>,
  update?: Maybe<PartyCartUpdateWithoutPartyDataInput>,
  upsert?: Maybe<PartyCartUpsertWithoutPartyInput>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyCartWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyCartWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyCartWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  party?: Maybe<PartyWhereInput>,
  items_every?: Maybe<PartyCartItemWhereInput>,
  items_some?: Maybe<PartyCartItemWhereInput>,
  items_none?: Maybe<PartyCartItemWhereInput>,
};

export type PartyCartWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

/** A connection to a list of items. */
export type PartyConnection = {
   __typename?: 'PartyConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PartyEdge>>,
  aggregate: AggregateParty,
};

export type PartyCreateInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  games?: Maybe<GameCreateManyInput>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
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
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  games?: Maybe<GameCreateManyInput>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
};

export type PartyCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  games?: Maybe<GameCreateManyInput>,
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
};

export type PartyCreateWithoutPlaylistInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  games?: Maybe<GameCreateManyInput>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackCreateManyWithoutPartyInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
};

export type PartyCreateWithoutSavedTracksInput = {
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  normalizedTitle: Scalars['String'],
  description: Scalars['String'],
  colorTint: Scalars['String'],
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret: Scalars['String'],
  author: UserCreateOneInput,
  location: LocationCreateOneInput,
  games?: Maybe<GameCreateManyInput>,
  members?: Maybe<UserCreateManyWithoutPartiesInput>,
  playlist?: Maybe<PlaylistCreateManyWithoutPartiesInput>,
  cart: PartyCartCreateOneWithoutPartyInput,
};

/** An edge in a connection. */
export type PartyEdge = {
   __typename?: 'PartyEdge',
  /** The item at the end of the edge. */
  node: Party,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type PartyInvitation = Node & {
   __typename?: 'PartyInvitation',
  id: Scalars['ID'],
  invitedBy: User,
  user: User,
  party: Party,
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
  createdAt: Scalars['DateTime'],
};

/** A connection to a list of items. */
export type PartyInvitationConnection = {
   __typename?: 'PartyInvitationConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PartyInvitationEdge>>,
  aggregate: AggregatePartyInvitation,
};

export type PartyInvitationCreateInput = {
  id?: Maybe<Scalars['ID']>,
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
  invitedBy: UserCreateOneInput,
  user: UserCreateOneWithoutPendingPartyInvitationsInput,
  party: PartyCreateOneInput,
};

export type PartyInvitationCreateManyWithoutUserInput = {
  create?: Maybe<Array<PartyInvitationCreateWithoutUserInput>>,
  connect?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
};

export type PartyInvitationCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  invitedUserId: Scalars['String'],
  partyId: Scalars['String'],
  invitedBy: UserCreateOneInput,
  party: PartyCreateOneInput,
};

/** An edge in a connection. */
export type PartyInvitationEdge = {
   __typename?: 'PartyInvitationEdge',
  /** The item at the end of the edge. */
  node: PartyInvitation,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyInvitationScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyInvitationScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyInvitationScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  invitedUserId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  invitedUserId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  invitedUserId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  invitedUserId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  invitedUserId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  invitedUserId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  invitedUserId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  invitedUserId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  invitedUserId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  invitedUserId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  invitedUserId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  partyId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  partyId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  partyId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  partyId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  partyId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  partyId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  partyId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  partyId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  partyId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  partyId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  partyId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  partyId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  partyId_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
};

export type PartyInvitationSubscriptionPayload = {
   __typename?: 'PartyInvitationSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PartyInvitation>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartyInvitationPreviousValues>,
};

export type PartyInvitationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyInvitationSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyInvitationWhereInput>,
};

export type PartyInvitationUpdateInput = {
  invitedUserId?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  user?: Maybe<UserUpdateOneRequiredWithoutPendingPartyInvitationsInput>,
  party?: Maybe<PartyUpdateOneRequiredInput>,
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
  connect?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  set?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  delete?: Maybe<Array<PartyInvitationWhereUniqueInput>>,
  update?: Maybe<Array<PartyInvitationUpdateWithWhereUniqueWithoutUserInput>>,
  updateMany?: Maybe<Array<PartyInvitationUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PartyInvitationScalarWhereInput>>,
  upsert?: Maybe<Array<PartyInvitationUpsertWithWhereUniqueWithoutUserInput>>,
};

export type PartyInvitationUpdateManyWithWhereNestedInput = {
  where: PartyInvitationScalarWhereInput,
  data: PartyInvitationUpdateManyDataInput,
};

export type PartyInvitationUpdateWithoutUserDataInput = {
  invitedUserId?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
  invitedBy?: Maybe<UserUpdateOneRequiredInput>,
  party?: Maybe<PartyUpdateOneRequiredInput>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyInvitationWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyInvitationWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyInvitationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  invitedUserId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  invitedUserId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  invitedUserId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  invitedUserId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  invitedUserId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  invitedUserId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  invitedUserId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  invitedUserId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  invitedUserId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  invitedUserId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  invitedUserId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  invitedUserId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  invitedUserId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  invitedUserId_not_ends_with?: Maybe<Scalars['String']>,
  partyId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  partyId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  partyId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  partyId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  partyId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  partyId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  partyId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  partyId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  partyId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  partyId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  partyId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  partyId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  partyId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  partyId_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  invitedBy?: Maybe<UserWhereInput>,
  user?: Maybe<UserWhereInput>,
  party?: Maybe<PartyWhereInput>,
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

export type PartySavedTrack = Node & {
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

/** A connection to a list of items. */
export type PartySavedTrackConnection = {
   __typename?: 'PartySavedTrackConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
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
  stringArtists: Scalars['String'],
  length: Scalars['String'],
  popularity: Scalars['Int'],
  party: PartyCreateOneWithoutSavedTracksInput,
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

/** An edge in a connection. */
export type PartySavedTrackEdge = {
   __typename?: 'PartySavedTrackEdge',
  /** The item at the end of the edge. */
  node: PartySavedTrack,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  spotifyId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  spotifyId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  spotifyId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  spotifyId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  spotifyId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  spotifyId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  spotifyId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  spotifyId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  spotifyId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  spotifyId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  spotifyId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  spotifyId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  spotifyId_not_ends_with?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  durationMs_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  durationMs_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  durationMs_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  durationMs_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  durationMs_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  durationMs_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  durationMs_gte?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  explicit_not?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  previewUrl_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  previewUrl_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  previewUrl_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  previewUrl_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  previewUrl_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  previewUrl_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  previewUrl_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  previewUrl_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  previewUrl_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  previewUrl_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  previewUrl_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  previewUrl_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  previewUrl_not_ends_with?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  uri_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  uri_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  uri_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  uri_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  uri_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  uri_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  uri_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  uri_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  uri_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  uri_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  uri_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  uri_not_ends_with?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  stringArtists_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  stringArtists_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  stringArtists_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  stringArtists_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  stringArtists_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  stringArtists_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  stringArtists_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  stringArtists_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  stringArtists_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  stringArtists_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  stringArtists_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  stringArtists_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  stringArtists_not_ends_with?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  length_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  length_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  length_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  length_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  length_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  length_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  length_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  length_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  length_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  length_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  length_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  length_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  length_not_ends_with?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  popularity_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  popularity_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  popularity_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  popularity_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  popularity_gte?: Maybe<Scalars['Int']>,
};

export type PartySavedTrackSubscriptionPayload = {
   __typename?: 'PartySavedTrackSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<PartySavedTrack>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartySavedTrackPreviousValues>,
};

export type PartySavedTrackSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartySavedTrackSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartySavedTrackSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartySavedTrackSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartySavedTrackWhereInput>,
};

export type PartySavedTrackUpdateDataInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  party?: Maybe<PartyUpdateOneRequiredWithoutSavedTracksInput>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
};

export type PartySavedTrackUpdateInput = {
  spotifyId?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  party?: Maybe<PartyUpdateOneRequiredWithoutSavedTracksInput>,
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
  connect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  set?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  delete?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  update?: Maybe<Array<PartySavedTrackUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<PartySavedTrackUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  upsert?: Maybe<Array<PartySavedTrackUpsertWithWhereUniqueNestedInput>>,
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
  connect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  set?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  delete?: Maybe<Array<PartySavedTrackWhereUniqueInput>>,
  update?: Maybe<Array<PartySavedTrackUpdateWithWhereUniqueWithoutPartyInput>>,
  updateMany?: Maybe<Array<PartySavedTrackUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PartySavedTrackScalarWhereInput>>,
  upsert?: Maybe<Array<PartySavedTrackUpsertWithWhereUniqueWithoutPartyInput>>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartySavedTrackWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartySavedTrackWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartySavedTrackWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  spotifyId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  spotifyId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  spotifyId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  spotifyId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  spotifyId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  spotifyId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  spotifyId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  spotifyId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  spotifyId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  spotifyId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  spotifyId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  spotifyId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  spotifyId_not_ends_with?: Maybe<Scalars['String']>,
  durationMs?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  durationMs_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  durationMs_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  durationMs_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  durationMs_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  durationMs_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  durationMs_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  durationMs_gte?: Maybe<Scalars['Int']>,
  explicit?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  explicit_not?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  previewUrl?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  previewUrl_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  previewUrl_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  previewUrl_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  previewUrl_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  previewUrl_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  previewUrl_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  previewUrl_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  previewUrl_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  previewUrl_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  previewUrl_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  previewUrl_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  previewUrl_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  previewUrl_not_ends_with?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  uri_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  uri_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  uri_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  uri_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  uri_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  uri_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  uri_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  uri_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  uri_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  uri_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  uri_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  uri_not_ends_with?: Maybe<Scalars['String']>,
  stringArtists?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  stringArtists_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  stringArtists_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  stringArtists_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  stringArtists_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  stringArtists_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  stringArtists_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  stringArtists_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  stringArtists_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  stringArtists_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  stringArtists_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  stringArtists_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  stringArtists_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  stringArtists_not_ends_with?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  length_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  length_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  length_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  length_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  length_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  length_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  length_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  length_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  length_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  length_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  length_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  length_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  length_not_ends_with?: Maybe<Scalars['String']>,
  popularity?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  popularity_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  popularity_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  popularity_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  popularity_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  popularity_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  popularity_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  popularity_gte?: Maybe<Scalars['Int']>,
  party?: Maybe<PartyWhereInput>,
  album?: Maybe<AlbumWhereInput>,
};

export type PartySavedTrackWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type PartyScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  normalizedTitle_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  normalizedTitle_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  normalizedTitle_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  normalizedTitle_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  normalizedTitle_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  normalizedTitle_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  normalizedTitle_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  normalizedTitle_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  normalizedTitle_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  normalizedTitle_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  normalizedTitle_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  normalizedTitle_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  normalizedTitle_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  colorTint?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  colorTint_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  colorTint_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  colorTint_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  colorTint_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  colorTint_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  colorTint_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  colorTint_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  colorTint_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  colorTint_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  colorTint_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  colorTint_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  colorTint_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  colorTint_not_ends_with?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  isPublic_not?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  start_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  start_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  start_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  start_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  start_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  start_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  start_gte?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  inviteSecret_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  inviteSecret_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  inviteSecret_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  inviteSecret_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  inviteSecret_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  inviteSecret_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  inviteSecret_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  inviteSecret_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  inviteSecret_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  inviteSecret_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  inviteSecret_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  inviteSecret_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  inviteSecret_not_ends_with?: Maybe<Scalars['String']>,
};

export type PartySubscriptionPayload = {
   __typename?: 'PartySubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Party>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PartyPreviousValues>,
};

export type PartySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartySubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartySubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartySubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PartyWhereInput>,
};

export type PartyUpdateDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
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
  connect?: Maybe<Array<PartyWhereUniqueInput>>,
  set?: Maybe<Array<PartyWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyWhereUniqueInput>>,
  delete?: Maybe<Array<PartyWhereUniqueInput>>,
  update?: Maybe<Array<PartyUpdateWithWhereUniqueWithoutMembersInput>>,
  updateMany?: Maybe<Array<PartyUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PartyScalarWhereInput>>,
  upsert?: Maybe<Array<PartyUpsertWithWhereUniqueWithoutMembersInput>>,
};

export type PartyUpdateManyWithoutPlaylistInput = {
  create?: Maybe<Array<PartyCreateWithoutPlaylistInput>>,
  connect?: Maybe<Array<PartyWhereUniqueInput>>,
  set?: Maybe<Array<PartyWhereUniqueInput>>,
  disconnect?: Maybe<Array<PartyWhereUniqueInput>>,
  delete?: Maybe<Array<PartyWhereUniqueInput>>,
  update?: Maybe<Array<PartyUpdateWithWhereUniqueWithoutPlaylistInput>>,
  updateMany?: Maybe<Array<PartyUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PartyScalarWhereInput>>,
  upsert?: Maybe<Array<PartyUpsertWithWhereUniqueWithoutPlaylistInput>>,
};

export type PartyUpdateManyWithWhereNestedInput = {
  where: PartyScalarWhereInput,
  data: PartyUpdateManyDataInput,
};

export type PartyUpdateOneRequiredInput = {
  create?: Maybe<PartyCreateInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
  update?: Maybe<PartyUpdateDataInput>,
  upsert?: Maybe<PartyUpsertNestedInput>,
};

export type PartyUpdateOneRequiredWithoutCartInput = {
  create?: Maybe<PartyCreateWithoutCartInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
  update?: Maybe<PartyUpdateWithoutCartDataInput>,
  upsert?: Maybe<PartyUpsertWithoutCartInput>,
};

export type PartyUpdateOneRequiredWithoutSavedTracksInput = {
  create?: Maybe<PartyCreateWithoutSavedTracksInput>,
  connect?: Maybe<PartyWhereUniqueInput>,
  update?: Maybe<PartyUpdateWithoutSavedTracksDataInput>,
  upsert?: Maybe<PartyUpsertWithoutSavedTracksInput>,
};

export type PartyUpdateWithoutCartDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
};

export type PartyUpdateWithoutMembersDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  playlist?: Maybe<PlaylistUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateWithoutPlaylistDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
  savedTracks?: Maybe<PartySavedTrackUpdateManyWithoutPartyInput>,
  cart?: Maybe<PartyCartUpdateOneRequiredWithoutPartyInput>,
};

export type PartyUpdateWithoutSavedTracksDataInput = {
  title?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  colorTint?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredInput>,
  location?: Maybe<LocationUpdateOneRequiredInput>,
  games?: Maybe<GameUpdateManyInput>,
  members?: Maybe<UserUpdateManyWithoutPartiesInput>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PartyWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PartyWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PartyWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  normalizedTitle?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  normalizedTitle_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  normalizedTitle_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  normalizedTitle_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  normalizedTitle_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  normalizedTitle_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  normalizedTitle_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  normalizedTitle_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  normalizedTitle_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  normalizedTitle_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  normalizedTitle_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  normalizedTitle_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  normalizedTitle_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  normalizedTitle_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  colorTint?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  colorTint_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  colorTint_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  colorTint_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  colorTint_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  colorTint_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  colorTint_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  colorTint_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  colorTint_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  colorTint_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  colorTint_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  colorTint_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  colorTint_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  colorTint_not_ends_with?: Maybe<Scalars['String']>,
  isPublic?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  isPublic_not?: Maybe<Scalars['Boolean']>,
  start?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  start_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  start_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  start_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  start_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  start_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  start_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  start_gte?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  end_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  end_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  end_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  end_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  end_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  end_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  end_gte?: Maybe<Scalars['DateTime']>,
  inviteSecret?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  inviteSecret_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  inviteSecret_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  inviteSecret_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  inviteSecret_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  inviteSecret_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  inviteSecret_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  inviteSecret_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  inviteSecret_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  inviteSecret_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  inviteSecret_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  inviteSecret_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  inviteSecret_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  inviteSecret_not_ends_with?: Maybe<Scalars['String']>,
  author?: Maybe<UserWhereInput>,
  location?: Maybe<LocationWhereInput>,
  games_every?: Maybe<GameWhereInput>,
  games_some?: Maybe<GameWhereInput>,
  games_none?: Maybe<GameWhereInput>,
  members_every?: Maybe<UserWhereInput>,
  members_some?: Maybe<UserWhereInput>,
  members_none?: Maybe<UserWhereInput>,
  playlist_every?: Maybe<PlaylistWhereInput>,
  playlist_some?: Maybe<PlaylistWhereInput>,
  playlist_none?: Maybe<PlaylistWhereInput>,
  savedTracks_every?: Maybe<PartySavedTrackWhereInput>,
  savedTracks_some?: Maybe<PartySavedTrackWhereInput>,
  savedTracks_none?: Maybe<PartySavedTrackWhereInput>,
  cart?: Maybe<PartyCartWhereInput>,
};

export type PartyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  inviteSecret?: Maybe<Scalars['String']>,
};

export type Playlist = Node & {
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

/** A connection to a list of items. */
export type PlaylistConnection = {
   __typename?: 'PlaylistConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<PlaylistEdge>>,
  aggregate: AggregatePlaylist,
};

export type PlaylistCreateInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId: Scalars['ID'],
  uri: Scalars['String'],
  spotifyExternalUrl: Scalars['String'],
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  importable?: Maybe<Scalars['Boolean']>,
  user: UserCreateOneInput,
  parties?: Maybe<PartyCreateManyWithoutPlaylistInput>,
  tracks?: Maybe<PartySavedTrackCreateManyInput>,
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
  name: Scalars['String'],
  imageUrl: Scalars['String'],
  importable?: Maybe<Scalars['Boolean']>,
  user: UserCreateOneInput,
  tracks?: Maybe<PartySavedTrackCreateManyInput>,
};

/** An edge in a connection. */
export type PlaylistEdge = {
   __typename?: 'PlaylistEdge',
  /** The item at the end of the edge. */
  node: Playlist,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaylistScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaylistScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaylistScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  spotifyId_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  spotifyId_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  spotifyId_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  spotifyId_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  spotifyId_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  spotifyId_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  uri?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  uri_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  uri_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  uri_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  uri_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  uri_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  uri_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  uri_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  uri_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  uri_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  uri_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  uri_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  uri_not_ends_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  spotifyExternalUrl_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  spotifyExternalUrl_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  spotifyExternalUrl_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  spotifyExternalUrl_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  spotifyExternalUrl_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  spotifyExternalUrl_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  spotifyExternalUrl_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  spotifyExternalUrl_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  spotifyExternalUrl_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  spotifyExternalUrl_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  spotifyExternalUrl_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  spotifyExternalUrl_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  spotifyExternalUrl_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  imageUrl_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  imageUrl_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  imageUrl_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  imageUrl_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  imageUrl_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  imageUrl_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
  importable?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  importable_not?: Maybe<Scalars['Boolean']>,
};

export type PlaylistSubscriptionPayload = {
   __typename?: 'PlaylistSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Playlist>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PlaylistPreviousValues>,
};

export type PlaylistSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaylistSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaylistSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaylistSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PlaylistWhereInput>,
};

export type PlaylistUpdateInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  importable?: Maybe<Scalars['Boolean']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  parties?: Maybe<PartyUpdateManyWithoutPlaylistInput>,
  tracks?: Maybe<PartySavedTrackUpdateManyInput>,
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
  connect?: Maybe<Array<PlaylistWhereUniqueInput>>,
  set?: Maybe<Array<PlaylistWhereUniqueInput>>,
  disconnect?: Maybe<Array<PlaylistWhereUniqueInput>>,
  delete?: Maybe<Array<PlaylistWhereUniqueInput>>,
  update?: Maybe<Array<PlaylistUpdateWithWhereUniqueWithoutPartiesInput>>,
  updateMany?: Maybe<Array<PlaylistUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PlaylistScalarWhereInput>>,
  upsert?: Maybe<Array<PlaylistUpsertWithWhereUniqueWithoutPartiesInput>>,
};

export type PlaylistUpdateManyWithWhereNestedInput = {
  where: PlaylistScalarWhereInput,
  data: PlaylistUpdateManyDataInput,
};

export type PlaylistUpdateWithoutPartiesDataInput = {
  spotifyId?: Maybe<Scalars['ID']>,
  uri?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  importable?: Maybe<Scalars['Boolean']>,
  user?: Maybe<UserUpdateOneRequiredInput>,
  tracks?: Maybe<PartySavedTrackUpdateManyInput>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaylistWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaylistWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaylistWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  spotifyId_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  spotifyId_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  spotifyId_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  spotifyId_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  spotifyId_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  spotifyId_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  spotifyId_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  spotifyId_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  spotifyId_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  spotifyId_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  spotifyId_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  spotifyId_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  spotifyId_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  uri?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  uri_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  uri_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  uri_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  uri_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  uri_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  uri_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  uri_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  uri_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  uri_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  uri_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  uri_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  uri_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  uri_not_ends_with?: Maybe<Scalars['String']>,
  spotifyExternalUrl?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  spotifyExternalUrl_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  spotifyExternalUrl_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  spotifyExternalUrl_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  spotifyExternalUrl_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  spotifyExternalUrl_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  spotifyExternalUrl_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  spotifyExternalUrl_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  spotifyExternalUrl_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  spotifyExternalUrl_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  spotifyExternalUrl_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  spotifyExternalUrl_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  spotifyExternalUrl_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  spotifyExternalUrl_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  imageUrl_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  imageUrl_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  imageUrl_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  imageUrl_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  imageUrl_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  imageUrl_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  imageUrl_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  imageUrl_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  imageUrl_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  imageUrl_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  imageUrl_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  imageUrl_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  imageUrl_not_ends_with?: Maybe<Scalars['String']>,
  importable?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  importable_not?: Maybe<Scalars['Boolean']>,
  user?: Maybe<UserWhereInput>,
  parties_every?: Maybe<PartyWhereInput>,
  parties_some?: Maybe<PartyWhereInput>,
  parties_none?: Maybe<PartyWhereInput>,
  tracks_every?: Maybe<PartySavedTrackWhereInput>,
  tracks_some?: Maybe<PartySavedTrackWhereInput>,
  tracks_none?: Maybe<PartySavedTrackWhereInput>,
};

export type PlaylistWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  spotifyId?: Maybe<Scalars['ID']>,
};

export type Query = {
   __typename?: 'Query',
  messages: Array<Maybe<Message>>,
  partyInvitations: Array<Maybe<PartyInvitation>>,
  friendInvitations: Array<Maybe<FriendInvitation>>,
  chats: Array<Maybe<Chat>>,
  playlists: Array<Maybe<Playlist>>,
  partyCarts: Array<Maybe<PartyCart>>,
  partyCartItems: Array<Maybe<PartyCartItem>>,
  tracks: Array<Maybe<Track>>,
  images: Array<Maybe<Image>>,
  artists: Array<Maybe<Artist>>,
  locations: Array<Maybe<Location>>,
  games: Array<Maybe<Game>>,
  partySavedTracks: Array<Maybe<PartySavedTrack>>,
  users: Array<Maybe<User>>,
  parties: Array<Maybe<Party>>,
  albums: Array<Maybe<Album>>,
  message?: Maybe<Message>,
  partyInvitation?: Maybe<PartyInvitation>,
  friendInvitation?: Maybe<FriendInvitation>,
  chat?: Maybe<Chat>,
  playlist?: Maybe<Playlist>,
  partyCart?: Maybe<PartyCart>,
  partyCartItem?: Maybe<PartyCartItem>,
  track?: Maybe<Track>,
  image?: Maybe<Image>,
  artist?: Maybe<Artist>,
  location?: Maybe<Location>,
  game?: Maybe<Game>,
  partySavedTrack?: Maybe<PartySavedTrack>,
  user?: Maybe<User>,
  party?: Maybe<Party>,
  album?: Maybe<Album>,
  messagesConnection: MessageConnection,
  partyInvitationsConnection: PartyInvitationConnection,
  friendInvitationsConnection: FriendInvitationConnection,
  chatsConnection: ChatConnection,
  playlistsConnection: PlaylistConnection,
  partyCartsConnection: PartyCartConnection,
  partyCartItemsConnection: PartyCartItemConnection,
  tracksConnection: TrackConnection,
  imagesConnection: ImageConnection,
  artistsConnection: ArtistConnection,
  locationsConnection: LocationConnection,
  gamesConnection: GameConnection,
  partySavedTracksConnection: PartySavedTrackConnection,
  usersConnection: UserConnection,
  partiesConnection: PartyConnection,
  albumsConnection: AlbumConnection,
  /** Fetches an object given its ID */
  node?: Maybe<Node>,
  hasChats: Scalars['Boolean'],
  authenticateParty: PartyAuthenticationResult,
  hasParties: Scalars['Boolean'],
  canJoinParty?: Maybe<Scalars['Boolean']>,
  partyCartCost: Scalars['Float'],
  me?: Maybe<User>,
  getUsers: Array<Maybe<User>>,
  userFriends: UserFriends,
  paginateUsers: UserConnection,
  temp__?: Maybe<Scalars['Boolean']>,
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


export type QueryPartyInvitationsArgs = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
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


export type QueryChatsArgs = {
  where?: Maybe<ChatWhereInput>,
  orderBy?: Maybe<ChatOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
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


export type QueryPartyCartsArgs = {
  where?: Maybe<PartyCartWhereInput>,
  orderBy?: Maybe<PartyCartOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
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


export type QueryTracksArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryImagesArgs = {
  where?: Maybe<ImageWhereInput>,
  orderBy?: Maybe<ImageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
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


export type QueryLocationsArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryGamesArgs = {
  where?: Maybe<GameWhereInput>,
  orderBy?: Maybe<GameOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
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


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
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


export type QueryAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>,
  orderBy?: Maybe<AlbumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput
};


export type QueryPartyInvitationArgs = {
  where: PartyInvitationWhereUniqueInput
};


export type QueryFriendInvitationArgs = {
  where: FriendInvitationWhereUniqueInput
};


export type QueryChatArgs = {
  where: ChatWhereUniqueInput
};


export type QueryPlaylistArgs = {
  where: PlaylistWhereUniqueInput
};


export type QueryPartyCartArgs = {
  where: PartyCartWhereUniqueInput
};


export type QueryPartyCartItemArgs = {
  where: PartyCartItemWhereUniqueInput
};


export type QueryTrackArgs = {
  where: TrackWhereUniqueInput
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput
};


export type QueryArtistArgs = {
  where: ArtistWhereUniqueInput
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput
};


export type QueryGameArgs = {
  where: GameWhereUniqueInput
};


export type QueryPartySavedTrackArgs = {
  where: PartySavedTrackWhereUniqueInput
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryPartyArgs = {
  where: PartyWhereUniqueInput
};


export type QueryAlbumArgs = {
  where: AlbumWhereUniqueInput
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


export type QueryPartyInvitationsConnectionArgs = {
  where?: Maybe<PartyInvitationWhereInput>,
  orderBy?: Maybe<PartyInvitationOrderByInput>,
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


export type QueryChatsConnectionArgs = {
  where?: Maybe<ChatWhereInput>,
  orderBy?: Maybe<ChatOrderByInput>,
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


export type QueryPartyCartsConnectionArgs = {
  where?: Maybe<PartyCartWhereInput>,
  orderBy?: Maybe<PartyCartOrderByInput>,
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


export type QueryTracksConnectionArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryImagesConnectionArgs = {
  where?: Maybe<ImageWhereInput>,
  orderBy?: Maybe<ImageOrderByInput>,
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


export type QueryLocationsConnectionArgs = {
  where?: Maybe<LocationWhereInput>,
  orderBy?: Maybe<LocationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryGamesConnectionArgs = {
  where?: Maybe<GameWhereInput>,
  orderBy?: Maybe<GameOrderByInput>,
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


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
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


export type QueryAlbumsConnectionArgs = {
  where?: Maybe<AlbumWhereInput>,
  orderBy?: Maybe<AlbumOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};


export type QueryHasChatsArgs = {
  where?: Maybe<ChatWhereInput>
};


export type QueryAuthenticatePartyArgs = {
  partyId: Scalars['ID']
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
  message?: Maybe<MessageSubscriptionPayload>,
  partyInvitation?: Maybe<PartyInvitationSubscriptionPayload>,
  friendInvitation?: Maybe<FriendInvitationSubscriptionPayload>,
  chat?: Maybe<ChatSubscriptionPayload>,
  playlist?: Maybe<PlaylistSubscriptionPayload>,
  partyCart?: Maybe<PartyCartSubscriptionPayload>,
  partyCartItem?: Maybe<PartyCartItemSubscriptionPayload>,
  track?: Maybe<TrackSubscriptionPayload>,
  image?: Maybe<ImageSubscriptionPayload>,
  artist?: Maybe<ArtistSubscriptionPayload>,
  location?: Maybe<LocationSubscriptionPayload>,
  game?: Maybe<GameSubscriptionPayload>,
  partySavedTrack?: Maybe<PartySavedTrackSubscriptionPayload>,
  user?: Maybe<UserSubscriptionPayload>,
  party?: Maybe<PartySubscriptionPayload>,
  album?: Maybe<AlbumSubscriptionPayload>,
};


export type SubscriptionMessageArgs = {
  where?: Maybe<MessageSubscriptionWhereInput>
};


export type SubscriptionPartyInvitationArgs = {
  where?: Maybe<PartyInvitationSubscriptionWhereInput>
};


export type SubscriptionFriendInvitationArgs = {
  where?: Maybe<FriendInvitationSubscriptionWhereInput>
};


export type SubscriptionChatArgs = {
  where?: Maybe<ChatSubscriptionWhereInput>
};


export type SubscriptionPlaylistArgs = {
  where?: Maybe<PlaylistSubscriptionWhereInput>
};


export type SubscriptionPartyCartArgs = {
  where?: Maybe<PartyCartSubscriptionWhereInput>
};


export type SubscriptionPartyCartItemArgs = {
  where?: Maybe<PartyCartItemSubscriptionWhereInput>
};


export type SubscriptionTrackArgs = {
  where?: Maybe<TrackSubscriptionWhereInput>
};


export type SubscriptionImageArgs = {
  where?: Maybe<ImageSubscriptionWhereInput>
};


export type SubscriptionArtistArgs = {
  where?: Maybe<ArtistSubscriptionWhereInput>
};


export type SubscriptionLocationArgs = {
  where?: Maybe<LocationSubscriptionWhereInput>
};


export type SubscriptionGameArgs = {
  where?: Maybe<GameSubscriptionWhereInput>
};


export type SubscriptionPartySavedTrackArgs = {
  where?: Maybe<PartySavedTrackSubscriptionWhereInput>
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};


export type SubscriptionPartyArgs = {
  where?: Maybe<PartySubscriptionWhereInput>
};


export type SubscriptionAlbumArgs = {
  where?: Maybe<AlbumSubscriptionWhereInput>
};

export type SuccessMessage = {
   __typename?: 'SuccessMessage',
  message: Scalars['String'],
};

export type Track = Node & {
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

/** A connection to a list of items. */
export type TrackConnection = {
   __typename?: 'TrackConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<TrackEdge>>,
  aggregate: AggregateTrack,
};

export type TrackCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  duration: Scalars['Int'],
  preview_url?: Maybe<Scalars['String']>,
  album: AlbumCreateOneInput,
  artists?: Maybe<ArtistCreateManyInput>,
};

/** An edge in a connection. */
export type TrackEdge = {
   __typename?: 'TrackEdge',
  /** The item at the end of the edge. */
  node: Track,
  /** A cursor for use in pagination. */
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TrackSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TrackSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TrackSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TrackWhereInput>,
};

export type TrackUpdateInput = {
  name?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
  album?: Maybe<AlbumUpdateOneRequiredInput>,
  artists?: Maybe<ArtistUpdateManyInput>,
};

export type TrackUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
};

export type TrackWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TrackWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TrackWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TrackWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  duration_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  duration_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  duration_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  duration_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  duration_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  duration_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  duration_gte?: Maybe<Scalars['Int']>,
  preview_url?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  preview_url_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  preview_url_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  preview_url_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  preview_url_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  preview_url_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  preview_url_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  preview_url_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  preview_url_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  preview_url_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  preview_url_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  preview_url_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  preview_url_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  preview_url_not_ends_with?: Maybe<Scalars['String']>,
  album?: Maybe<AlbumWhereInput>,
  artists_every?: Maybe<ArtistWhereInput>,
  artists_some?: Maybe<ArtistWhereInput>,
  artists_none?: Maybe<ArtistWhereInput>,
};

export type TrackWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type User = Node & {
   __typename?: 'User',
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
  pendingInvitations?: Maybe<Array<User>>,
  status: UserStatus,
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

/** A connection to a list of items. */
export type UserConnection = {
   __typename?: 'UserConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
};

export type UserCreateManyInput = {
  create?: Maybe<Array<UserCreateInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateManyWithoutChatsInput = {
  create?: Maybe<Array<UserCreateWithoutChatsInput>>,
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

export type UserCreateWithoutCartItemsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
};

export type UserCreateWithoutChatsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
};

export type UserCreateWithoutPartiesInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  friends?: Maybe<UserCreateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
};

export type UserCreateWithoutPendingFriendInvitationsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
};

export type UserCreateWithoutPendingPartyInvitationsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  password: Scalars['String'],
  lastOnline?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  avatar?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  parties?: Maybe<PartyCreateManyWithoutMembersInput>,
  friends?: Maybe<UserCreateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationCreateManyWithoutUserInput>,
  chats?: Maybe<ChatCreateManyWithoutMembersInput>,
  cartItems?: Maybe<PartyCartItemCreateManyWithoutUserInput>,
};

/** An edge in a connection. */
export type UserEdge = {
   __typename?: 'UserEdge',
  /** The item at the end of the edge. */
  node: User,
  /** A cursor for use in pagination. */
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
  IsPrivateDesc = 'isPrivate_DESC'
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
};

export type UserScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  firstName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  firstName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  firstName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  firstName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  lastName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  lastName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  lastName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  lastName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  lastOnline_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  lastOnline_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  lastOnline_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  lastOnline_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  lastOnline_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  lastOnline_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  lastOnline_gte?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  deleted_not?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  /** All values that are not equal to given value. */
  provider_not?: Maybe<SocialMediaType>,
  /** All values that are contained in given list. */
  provider_in?: Maybe<Array<SocialMediaType>>,
  /** All values that are not contained in given list. */
  provider_not_in?: Maybe<Array<SocialMediaType>>,
  avatar?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  avatar_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  avatar_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  avatar_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  avatar_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  avatar_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  avatar_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  avatar_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  avatar_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  avatar_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  avatar_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  thirdPartyId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  thirdPartyId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  thirdPartyId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  thirdPartyId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  thirdPartyId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  thirdPartyId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  thirdPartyId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  thirdPartyId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  thirdPartyId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  thirdPartyId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  thirdPartyId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  thirdPartyId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  thirdPartyId_not_ends_with?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  resetToken_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  resetToken_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  resetToken_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  resetToken_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  resetToken_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  resetToken_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  resetToken_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  resetToken_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  resetToken_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  resetToken_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  resetToken_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  resetToken_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  resetToken_not_ends_with?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  resetTokenExpiry_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  resetTokenExpiry_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  resetTokenExpiry_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  resetTokenExpiry_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  resetTokenExpiry_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  resetTokenExpiry_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  resetTokenExpiry_gte?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  isPrivate_not?: Maybe<Scalars['Boolean']>,
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
};

export type UserUpdateDataInput = {
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
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
};

export type UserUpdateInput = {
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
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
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
};

export type UserUpdateManyInput = {
  create?: Maybe<Array<UserCreateInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueNestedInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueNestedInput>>,
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
};

export type UserUpdateManyWithoutChatsInput = {
  create?: Maybe<Array<UserCreateWithoutChatsInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutChatsInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutChatsInput>>,
};

export type UserUpdateManyWithoutPartiesInput = {
  create?: Maybe<Array<UserCreateWithoutPartiesInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutPartiesInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutPartiesInput>>,
};

export type UserUpdateManyWithWhereNestedInput = {
  where: UserScalarWhereInput,
  data: UserUpdateManyDataInput,
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateDataInput>,
  upsert?: Maybe<UserUpsertNestedInput>,
};

export type UserUpdateOneRequiredWithoutCartItemsInput = {
  create?: Maybe<UserCreateWithoutCartItemsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutCartItemsDataInput>,
  upsert?: Maybe<UserUpsertWithoutCartItemsInput>,
};

export type UserUpdateOneRequiredWithoutPendingFriendInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingFriendInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutPendingFriendInvitationsDataInput>,
  upsert?: Maybe<UserUpsertWithoutPendingFriendInvitationsInput>,
};

export type UserUpdateOneRequiredWithoutPendingPartyInvitationsInput = {
  create?: Maybe<UserCreateWithoutPendingPartyInvitationsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutPendingPartyInvitationsDataInput>,
  upsert?: Maybe<UserUpsertWithoutPendingPartyInvitationsInput>,
};

export type UserUpdateWithoutCartItemsDataInput = {
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
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
};

export type UserUpdateWithoutChatsDataInput = {
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
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
};

export type UserUpdateWithoutPartiesDataInput = {
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
  friends?: Maybe<UserUpdateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
};

export type UserUpdateWithoutPendingFriendInvitationsDataInput = {
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
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyInput>,
  pendingPartyInvitations?: Maybe<PartyInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
};

export type UserUpdateWithoutPendingPartyInvitationsDataInput = {
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
  parties?: Maybe<PartyUpdateManyWithoutMembersInput>,
  friends?: Maybe<UserUpdateManyInput>,
  pendingFriendInvitations?: Maybe<FriendInvitationUpdateManyWithoutUserInput>,
  chats?: Maybe<ChatUpdateManyWithoutMembersInput>,
  cartItems?: Maybe<PartyCartItemUpdateManyWithoutUserInput>,
};

export type UserUpdateWithWhereUniqueNestedInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateDataInput,
};

export type UserUpdateWithWhereUniqueWithoutChatsInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutChatsDataInput,
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

export type UserUpsertWithWhereUniqueNestedInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateDataInput,
  create: UserCreateInput,
};

export type UserUpsertWithWhereUniqueWithoutChatsInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutChatsDataInput,
  create: UserCreateWithoutChatsInput,
};

export type UserUpsertWithWhereUniqueWithoutPartiesInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutPartiesDataInput,
  create: UserCreateWithoutPartiesInput,
};

export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  firstName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  firstName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  firstName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  firstName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  lastName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  lastName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  lastName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  lastName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  lastName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  lastName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  lastName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  lastName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  lastName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  lastName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  lastOnline?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  lastOnline_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  lastOnline_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  lastOnline_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  lastOnline_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  lastOnline_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  lastOnline_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  lastOnline_gte?: Maybe<Scalars['DateTime']>,
  deleted?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  deleted_not?: Maybe<Scalars['Boolean']>,
  provider?: Maybe<SocialMediaType>,
  /** All values that are not equal to given value. */
  provider_not?: Maybe<SocialMediaType>,
  /** All values that are contained in given list. */
  provider_in?: Maybe<Array<SocialMediaType>>,
  /** All values that are not contained in given list. */
  provider_not_in?: Maybe<Array<SocialMediaType>>,
  avatar?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  avatar_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  avatar_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  avatar_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  avatar_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  avatar_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  avatar_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  avatar_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  avatar_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  avatar_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  avatar_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  thirdPartyId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  thirdPartyId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  thirdPartyId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  thirdPartyId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  thirdPartyId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  thirdPartyId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  thirdPartyId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  thirdPartyId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  thirdPartyId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  thirdPartyId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  thirdPartyId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  thirdPartyId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  thirdPartyId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  thirdPartyId_not_ends_with?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  resetToken_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  resetToken_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  resetToken_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  resetToken_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  resetToken_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  resetToken_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  resetToken_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  resetToken_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  resetToken_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  resetToken_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  resetToken_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  resetToken_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  resetToken_not_ends_with?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  resetTokenExpiry_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  resetTokenExpiry_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  resetTokenExpiry_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  resetTokenExpiry_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  resetTokenExpiry_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  resetTokenExpiry_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  resetTokenExpiry_gte?: Maybe<Scalars['DateTime']>,
  isPrivate?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  isPrivate_not?: Maybe<Scalars['Boolean']>,
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
  cartItems_every?: Maybe<PartyCartItemWhereInput>,
  cartItems_some?: Maybe<PartyCartItemWhereInput>,
  cartItems_none?: Maybe<PartyCartItemWhereInput>,
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
  )>> }
);

export type Message_FragmentFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'id' | 'isSendByMe' | 'optimisticallyAdded' | 'optimisticallyCreated' | 'hasOptimisticError' | 'content' | 'createdAt'>
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
    & Pick<User, 'firstName' | 'lastName'>
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
  id: Scalars['String']
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
  & { createParty: { __typename?: 'Party' }
    & Party_FragmentFragment
   }
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
  )
    & Full_Saved_Track_FragmentFragment
   }
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
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'avatar'>
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
  )
    & Party_FragmentFragment
  >> }
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
  )
    & Party_FragmentFragment
  > }
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
      & { node: { __typename?: 'Party' }
        & Party_FragmentFragment
       }
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
      & { node: { __typename?: 'Message' }
        & Message_FragmentFragment
       }
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
      & { node: { __typename?: 'PartyInvitation' }
        & Party_Invitation_FragmentFragment
       }
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
  & { partyInvitations: Array<Maybe<{ __typename?: 'PartyInvitation' }
    & Party_Invitation_FragmentFragment
  >> }
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
    & { node: Maybe<{ __typename?: 'PartyInvitation' }
      & Party_Invitation_FragmentFragment
    >, previousValues: Maybe<(
      { __typename?: 'PartyInvitationPreviousValues' }
      & Pick<PartyInvitationPreviousValues, 'id' | 'invitedUserId' | 'partyId'>
    )> }
  )> }
);
export type Party_FragmentLocation = Party_FragmentFragment['location'];
export type Party_FragmentAuthor = Party_FragmentFragment['author'];
export type Party_FragmentMembers = Party_FragmentFragment['members'][0];
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
export type Party_SavedTracksPartySavedTracks = Party_SavedTracksQuery['partySavedTracks'][0];
export type ChatMessagesSubscriptionVariables = ChatMessagesSubscriptionSubscriptionVariables;
export type ChatMessagesSubscriptionMessage = ChatMessagesSubscriptionSubscription['message'];
export type ChatMessagesSubscriptionNode = ChatMessagesSubscriptionSubscription['message']['node'];
export type ChatMessagesSubscriptionAuthor = ChatMessagesSubscriptionSubscription['message']['node']['author'];
export type ChatMessagesSubscriptionChat = ChatMessagesSubscriptionSubscription['message']['node']['chat'];
export type PartyInvitationSubscriptionVariables = PartyInvitationSubscriptionSubscriptionVariables;
export type PartyInvitationSubscriptionPartyInvitation = PartyInvitationSubscriptionSubscription['partyInvitation'];
export type PartyInvitationSubscriptionNode = Party_Invitation_FragmentFragment;
export type PartyInvitationSubscriptionPreviousValues = PartyInvitationSubscriptionSubscription['partyInvitation']['previousValues'];export const Party_FragmentFragmentDoc = gql`
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
  isSendByMe @client
  optimisticallyAdded @client
  optimisticallyCreated @client
  hasOptimisticError @client
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
    firstName
    lastName
  }
}
    `;
export const Party_Authentication_Minimal_Party_FragmentFragmentDoc = gql`
    fragment PARTY_AUTHENTICATION_MINIMAL_PARTY_FRAGMENT on Party {
  id
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
    mutation SocialLogin($id: String!) {
  socialLogin(id: $id) {
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
    spotifyId
  }
}
    `;

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