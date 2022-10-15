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
  Upload: any;
};

export type AuthenticationInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Course = {
  __typename?: 'Course';
  created_at: Scalars['Date'];
  description: Scalars['String'];
  enrollments: Array<Enrollment>;
  id: Scalars['String'];
  image: Scalars['String'];
  lessons: Array<Lesson>;
  slug: Scalars['String'];
  steps: Array<Step>;
  title: Scalars['String'];
  updated_at: Scalars['Date'];
};

export type Enrollment = {
  __typename?: 'Enrollment';
  courseId: Scalars['String'];
  created_at: Scalars['Date'];
  deleted_at: Scalars['Date'];
  id: Scalars['String'];
  updated_at: Scalars['Date'];
  userId: Scalars['String'];
};

export type GetUserAuthInput = {
  token?: InputMaybe<Scalars['String']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  courseId: Scalars['String'];
  created_at: Scalars['Date'];
  description: Scalars['String'];
  id: Scalars['String'];
  link: Scalars['String'];
  slug: Scalars['String'];
  stepId: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['Date'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authentication: User;
  createCourse: Course;
  createEnrollment: Enrollment;
  createLesson: Lesson;
  createStep: Step;
  createUser: User;
  createUserGITHUB: User;
  createUserGOOGLE: User;
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
  input?: InputMaybe<NewUser>;
};


export type MutationCreateUserGithubArgs = {
  input?: InputMaybe<NewUserGithub>;
};


export type MutationCreateUserGoogleArgs = {
  input?: InputMaybe<NewUserGoogle>;
};

export type NewCourse = {
  created_at?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
};

export type NewEnrollment = {
  courseId: Scalars['String'];
  userId: Scalars['String'];
};

export type NewLesson = {
  courseId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stepId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type NewStep = {
  courseId: Scalars['String'];
  description: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type NewUser = {
  email?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type NewUserGithub = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type NewUserGoogle = {
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export enum Platform {
  Dr = 'DR',
  Github = 'GITHUB',
  Google = 'GOOGLE'
}

export type Query = {
  __typename?: 'Query';
  courses: Array<Course>;
  enrollments: Array<Enrollment>;
  lessons?: Maybe<Array<Maybe<Lesson>>>;
  steps?: Maybe<Array<Maybe<Step>>>;
  userAuthenticated: UserAuthenticated;
  users: Array<User>;
};


export type QueryUserAuthenticatedArgs = {
  input?: InputMaybe<GetUserAuthInput>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Step = {
  __typename?: 'Step';
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
  avatar: Scalars['String'];
  bio: Scalars['String'];
  email: Scalars['String'];
  enrollment: Array<Enrollment>;
  firstname: Scalars['String'];
  github: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  location: Scalars['String'];
  password: Scalars['String'];
  platform: Platform;
  role: Role;
  site: Scalars['String'];
  token_user: Scalars['String'];
  twitter: Scalars['String'];
  username: Scalars['String'];
};

export type UserAuthenticated = {
  __typename?: 'UserAuthenticated';
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  token_user?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type AuthMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
}>;


export type AuthMutation = { __typename?: 'Mutation', authentication: { __typename?: 'User', id: string, firstname: string, lastname: string, avatar: string, username: string, email: string, token_user: string } };

export type CreateUserGithubMutationVariables = Exact<{
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserGithubMutation = { __typename?: 'Mutation', createUserGITHUB: { __typename?: 'User', id: string, lastname: string, role: Role, firstname: string, email: string, avatar: string, github: string, platform: Platform, bio: string, location: string, twitter: string, site: string, username: string, token_user: string, enrollment: Array<{ __typename?: 'Enrollment', id: string }> } };

export type CreateUserGoogleMutationVariables = Exact<{
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserGoogleMutation = { __typename?: 'Mutation', createUserGOOGLE: { __typename?: 'User', id: string, lastname: string, role: Role, firstname: string, email: string, avatar: string, github: string, platform: Platform, bio: string, location: string, twitter: string, site: string, username: string, token_user: string, enrollment: Array<{ __typename?: 'Enrollment', id: string }> } };

export type CreateUserMutationVariables = Exact<{
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  username?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', email: string, password: string } };

export type GetAllCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCoursesQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'Course', id: string, title: string, image: string, slug: string, description: string, created_at: any, updated_at: any }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, firstname: string, lastname: string, email: string, avatar: string, password: string, token_user: string, enrollment: Array<{ __typename?: 'Enrollment', id: string }> }> };

export type GetUserAuthenticatedQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
}>;


export type GetUserAuthenticatedQuery = { __typename?: 'Query', userAuthenticated: { __typename?: 'UserAuthenticated', id?: string | null, firstname?: string | null, lastname?: string | null, avatar?: string | null, username?: string | null, email?: string | null, token_user?: string | null } };


export const AuthDocument = gql`
    mutation auth($password: String, $email: String, $token: String) {
  authentication(input: {email: $email, password: $password, token: $token}) {
    id
    firstname
    lastname
    avatar
    username
    email
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
export const CreateUserGithubDocument = gql`
    mutation createUserGITHUB($firstname: String, $lastname: String, $username: String, $avatar: String, $email: String, $github: String, $bio: String, $location: String, $twitter: String, $site: String) {
  createUserGITHUB(
    input: {firstname: $firstname, lastname: $lastname, username: $username, avatar: $avatar, email: $email, github: $github, bio: $bio, location: $location, twitter: $twitter, site: $site}
  ) {
    id
    lastname
    role
    firstname
    lastname
    role
    email
    avatar
    github
    platform
    bio
    location
    twitter
    site
    username
    token_user
    enrollment {
      id
    }
  }
}
    `;
export type CreateUserGithubMutationFn = Apollo.MutationFunction<CreateUserGithubMutation, CreateUserGithubMutationVariables>;

/**
 * __useCreateUserGithubMutation__
 *
 * To run a mutation, you first call `useCreateUserGithubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserGithubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserGithubMutation, { data, loading, error }] = useCreateUserGithubMutation({
 *   variables: {
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      username: // value for 'username'
 *      avatar: // value for 'avatar'
 *      email: // value for 'email'
 *      github: // value for 'github'
 *      bio: // value for 'bio'
 *      location: // value for 'location'
 *      twitter: // value for 'twitter'
 *      site: // value for 'site'
 *   },
 * });
 */
export function useCreateUserGithubMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserGithubMutation, CreateUserGithubMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserGithubMutation, CreateUserGithubMutationVariables>(CreateUserGithubDocument, options);
      }
export type CreateUserGithubMutationHookResult = ReturnType<typeof useCreateUserGithubMutation>;
export type CreateUserGithubMutationResult = Apollo.MutationResult<CreateUserGithubMutation>;
export type CreateUserGithubMutationOptions = Apollo.BaseMutationOptions<CreateUserGithubMutation, CreateUserGithubMutationVariables>;
export const CreateUserGoogleDocument = gql`
    mutation createUserGOOGLE($firstname: String, $lastname: String, $username: String, $avatar: String, $email: String) {
  createUserGOOGLE(
    input: {firstname: $firstname, lastname: $lastname, username: $username, avatar: $avatar, email: $email}
  ) {
    id
    lastname
    role
    firstname
    lastname
    role
    email
    avatar
    github
    platform
    bio
    location
    twitter
    site
    username
    token_user
    enrollment {
      id
    }
  }
}
    `;
export type CreateUserGoogleMutationFn = Apollo.MutationFunction<CreateUserGoogleMutation, CreateUserGoogleMutationVariables>;

/**
 * __useCreateUserGoogleMutation__
 *
 * To run a mutation, you first call `useCreateUserGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserGoogleMutation, { data, loading, error }] = useCreateUserGoogleMutation({
 *   variables: {
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      username: // value for 'username'
 *      avatar: // value for 'avatar'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateUserGoogleMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserGoogleMutation, CreateUserGoogleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserGoogleMutation, CreateUserGoogleMutationVariables>(CreateUserGoogleDocument, options);
      }
export type CreateUserGoogleMutationHookResult = ReturnType<typeof useCreateUserGoogleMutation>;
export type CreateUserGoogleMutationResult = Apollo.MutationResult<CreateUserGoogleMutation>;
export type CreateUserGoogleMutationOptions = Apollo.BaseMutationOptions<CreateUserGoogleMutation, CreateUserGoogleMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($firstname: String, $lastname: String, $email: String, $password: String, $file: Upload, $username: String) {
  createUser(
    input: {firstname: $firstname, lastname: $lastname, email: $email, password: $password, username: $username, file: $file}
  ) {
    email
    password
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      file: // value for 'file'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetAllCoursesDocument = gql`
    query getAllCourses {
  courses {
    id
    title
    image
    slug
    description
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetAllCoursesQuery__
 *
 * To run a query within a React component, call `useGetAllCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCoursesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCoursesQuery, GetAllCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
      }
export function useGetAllCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCoursesQuery, GetAllCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
        }
export type GetAllCoursesQueryHookResult = ReturnType<typeof useGetAllCoursesQuery>;
export type GetAllCoursesLazyQueryHookResult = ReturnType<typeof useGetAllCoursesLazyQuery>;
export type GetAllCoursesQueryResult = Apollo.QueryResult<GetAllCoursesQuery, GetAllCoursesQueryVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  users {
    id
    firstname
    lastname
    email
    avatar
    password
    token_user
    enrollment {
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
    avatar
    username
    email
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