/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      presentations {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPresentations = /* GraphQL */ `
  query SyncPresentations(
    $filter: ModelPresentationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPresentations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPresentation = /* GraphQL */ `
  query GetPresentation($id: ID!) {
    getPresentation(id: $id) {
      id
      userId
      createdAt
      presentationSlots {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
    }
  }
`;
export const listPresentations = /* GraphQL */ `
  query ListPresentations(
    $filter: ModelPresentationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresentations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPresentationSlots = /* GraphQL */ `
  query SyncPresentationSlots(
    $filter: ModelPresentationSlotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPresentationSlots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        presentationID
        speech
        emotions
        timestamp
        base64
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPresentationSlot = /* GraphQL */ `
  query GetPresentationSlot($id: ID!) {
    getPresentationSlot(id: $id) {
      id
      presentationID
      speech
      emotions
      timestamp
      base64
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPresentationSlots = /* GraphQL */ `
  query ListPresentationSlots(
    $filter: ModelPresentationSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresentationSlots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        presentationID
        speech
        emotions
        timestamp
        base64
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const presentationsByUserId = /* GraphQL */ `
  query PresentationsByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPresentationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    presentationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const presentationSlotsByPresentationId = /* GraphQL */ `
  query PresentationSlotsByPresentationId(
    $presentationID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPresentationSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    presentationSlotsByPresentationId(
      presentationID: $presentationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        presentationID
        speech
        emotions
        timestamp
        base64
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
