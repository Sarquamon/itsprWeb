import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  resetUserPassword?: Maybe<Scalars['String']>;
  bye?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryResetUserPasswordArgs = {
  curp?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  controlNumber?: Maybe<Scalars['String']>;
  curp?: Maybe<Scalars['String']>;
  rfc?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  names?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  secondLastname?: Maybe<Scalars['String']>;
  career?: Maybe<Scalars['String']>;
  civilState?: Maybe<Scalars['String']>;
  cellphone?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  birthState?: Maybe<Scalars['String']>;
  birthplace?: Maybe<Scalars['String']>;
  homeStreet?: Maybe<Scalars['String']>;
  homeNumber?: Maybe<Scalars['Int']>;
  homeNeighborhood?: Maybe<Scalars['String']>;
  homeMunicipality?: Maybe<Scalars['String']>;
  homePostalCode?: Maybe<Scalars['Int']>;
  homeCity?: Maybe<Scalars['String']>;
  homeState?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  schoolMunicipality?: Maybe<Scalars['String']>;
  schoolState?: Maybe<Scalars['String']>;
  gradDate?: Maybe<Scalars['Float']>;
  avgCalif?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['String']>;
  imssNumber?: Maybe<Scalars['Int']>;
  clinic?: Maybe<Scalars['String']>;
  bloodType?: Maybe<Scalars['String']>;
  workCompany?: Maybe<Scalars['String']>;
  tutor?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  revokeUserRefreshTokens?: Maybe<Scalars['Boolean']>;
  login?: Maybe<LoginResponse>;
  register?: Maybe<Scalars['Boolean']>;
};


export type MutationRevokeUserRefreshTokensArgs = {
  password?: Maybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  tutor?: Maybe<Scalars['String']>;
  workCompany?: Maybe<Scalars['String']>;
  bloodType?: Maybe<Scalars['String']>;
  clinic?: Maybe<Scalars['String']>;
  imssNumber?: Maybe<Scalars['Float']>;
  area?: Maybe<Scalars['String']>;
  avgCalif?: Maybe<Scalars['Float']>;
  gradDate?: Maybe<Scalars['Float']>;
  schoolState?: Maybe<Scalars['String']>;
  schoolMunicipality?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  homeState?: Maybe<Scalars['String']>;
  homeCity?: Maybe<Scalars['String']>;
  homePostalCode?: Maybe<Scalars['Float']>;
  homeMunicipality?: Maybe<Scalars['String']>;
  homeNeighborhood?: Maybe<Scalars['String']>;
  homeNumber?: Maybe<Scalars['Float']>;
  homeStreet?: Maybe<Scalars['String']>;
  birthplace?: Maybe<Scalars['String']>;
  birthState?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  cellphone?: Maybe<Scalars['String']>;
  civilState?: Maybe<Scalars['String']>;
  career?: Maybe<Scalars['String']>;
  secondLastname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  names?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  rfc?: Maybe<Scalars['String']>;
  curp?: Maybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken?: Maybe<Scalars['String']>;
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return ApolloReactHooks.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = ApolloReactCommon.QueryResult<HelloQuery, HelloQueryVariables>;