import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  Date: any;
};

export type AuthenticationInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Course = {
  __typename?: 'Course';
  Enrollments?: Maybe<Array<Maybe<Enrollment>>>;
  Lessons?: Maybe<Array<Maybe<Lesson>>>;
  Steps?: Maybe<Array<Maybe<Step>>>;
  created_at: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['Date'];
};

export type Enrollment = {
  __typename?: 'Enrollment';
  courseId: Scalars['String'];
  created_at: Scalars['Date'];
  deleted_at?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  updated_at?: Maybe<Scalars['Date']>;
  userId: Scalars['String'];
};

export type GetUserAuthInput = {
  token?: InputMaybe<Scalars['String']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  created_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  slug: Scalars['String'];
  stepId: Scalars['String'];
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['Date']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authentication: User;
  createCourse: Course;
  createEnrollment: Enrollment;
  createLesson: Lesson;
  createStep: Step;
  createUser: User;
};


export type MutationAuthenticationArgs = {
  input?: InputMaybe<AuthenticationInput>;
};


export type MutationCreateCourseArgs = {
  input: NewCourse;
};


export type MutationCreateEnrollmentArgs = {
  input: NewEnrollment;
};


export type MutationCreateLessonArgs = {
  input: NewLesson;
};


export type MutationCreateStepArgs = {
  input: NewStep;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};

export type NewCourse = {
  created_at?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['Date']>;
};

export type NewEnrollment = {
  courseId: Scalars['String'];
  userId: Scalars['String'];
};

export type NewLesson = {
  link: Scalars['String'];
  slug: Scalars['String'];
  stepId: Scalars['String'];
  title: Scalars['String'];
};

export type NewStep = {
  courseId: Scalars['String'];
  created_at?: InputMaybe<Scalars['Date']>;
  description: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['Date']>;
};

export type NewUser = {
  cellphone: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastname: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  courses?: Maybe<Array<Maybe<Course>>>;
  enrollments?: Maybe<Array<Maybe<Enrollment>>>;
  lessons?: Maybe<Array<Maybe<Lesson>>>;
  steps?: Maybe<Array<Maybe<Step>>>;
  userAuthenticated: UserAuthenticated;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserAuthenticatedArgs = {
  input?: InputMaybe<GetUserAuthInput>;
};

export type Step = {
  __typename?: 'Step';
  Course: Course;
  courseId: Scalars['String'];
  created_at: Scalars['Date'];
  description: Scalars['String'];
  id: Scalars['String'];
  lessons?: Maybe<Array<Maybe<Lesson>>>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['Date'];
};

export type User = {
  __typename?: 'User';
  Enrollment?: Maybe<Array<Maybe<Enrollment>>>;
  cellphone: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  token_user?: Maybe<Scalars['String']>;
};

export type UserAuthenticated = {
  __typename?: 'UserAuthenticated';
  cellphone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  token_user?: Maybe<Scalars['String']>;
};

export type AuthMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
}>;


export type AuthMutation = { __typename?: 'Mutation', authentication: { __typename?: 'User', id: string, firstname: string, lastname: string, email: string, cellphone: string, token_user?: string | null } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, firstname: string, lastname: string, email: string, password: string, cellphone: string, token_user?: string | null, Enrollment?: Array<{ __typename?: 'Enrollment', id: string } | null> | null } | null> | null };

export type GetUserAuthenticatedQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
}>;


export type GetUserAuthenticatedQuery = { __typename?: 'Query', userAuthenticated: { __typename?: 'UserAuthenticated', id?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, cellphone?: string | null, token_user?: string | null } };


export const AuthDocument = gql`
    mutation auth($password: String, $email: String, $token: String) {
  authentication(input: {email: $email, password: $password, token: $token}) {
    id
    firstname
    lastname
    email
    cellphone
    token_user
  }
}
    `;
export type AuthMutationFn = Apollo.MutationFunction<AuthMutation, AuthMutationVariables>;

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAuthMutation(baseOptions?: Apollo.MutationHookOptions<AuthMutation, AuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthMutation, AuthMutationVariables>(AuthDocument, options);
      }
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>;
export type AuthMutationResult = Apollo.MutationResult<AuthMutation>;
export type AuthMutationOptions = Apollo.BaseMutationOptions<AuthMutation, AuthMutationVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  users {
    id
    firstname
    lastname
    email
    password
    cellphone
    token_user
    Enrollment {
      id
    }
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserAuthenticatedDocument = gql`
    query GetUserAuthenticated($token: String) {
  userAuthenticated(input: {token: $token}) {
    id
    firstname
    lastname
    email
    cellphone
    token_user
  }
}
    `;

/**
 * __useGetUserAuthenticatedQuery__
 *
 * To run a query within a React component, call `useGetUserAuthenticatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAuthenticatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAuthenticatedQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetUserAuthenticatedQuery(baseOptions?: Apollo.QueryHookOptions<GetUserAuthenticatedQuery, GetUserAuthenticatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserAuthenticatedQuery, GetUserAuthenticatedQueryVariables>(GetUserAuthenticatedDocument, options);
      }
export function useGetUserAuthenticatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserAuthenticatedQuery, GetUserAuthenticatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserAuthenticatedQuery, GetUserAuthenticatedQueryVariables>(GetUserAuthenticatedDocument, options);
        }
export type GetUserAuthenticatedQueryHookResult = ReturnType<typeof useGetUserAuthenticatedQuery>;
export type GetUserAuthenticatedLazyQueryHookResult = ReturnType<typeof useGetUserAuthenticatedLazyQuery>;
export type GetUserAuthenticatedQueryResult = Apollo.QueryResult<GetUserAuthenticatedQuery, GetUserAuthenticatedQueryVariables>;