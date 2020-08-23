/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      presentations {
        items {
          id
          createdAt
          presentationSlots {
            nextToken
          }
          userId
          user {
            id
            createdAt
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
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
        presentations {
          items {
            id
            createdAt
            userId
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPresentation = /* GraphQL */ `
  query GetPresentation($id: ID!) {
    getPresentation(id: $id) {
      id
      createdAt
      presentationSlots {
        items {
          id
          speech
          emotions
          timestamp
          createdAt
          base64
          presentationId
          presentation {
            id
            createdAt
            userId
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        presentations {
          items {
            id
            createdAt
            userId
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
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
        createdAt
        presentationSlots {
          items {
            id
            speech
            emotions
            timestamp
            createdAt
            base64
            presentationId
            updatedAt
          }
          nextToken
        }
        userId
        user {
          id
          presentations {
            nextToken
          }
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPresentationSlot = /* GraphQL */ `
  query GetPresentationSlot($id: ID!) {
    getPresentationSlot(id: $id) {
      id
      speech
      emotions
      timestamp
      createdAt
      base64
      presentationId
      presentation {
        id
        createdAt
        presentationSlots {
          items {
            id
            speech
            emotions
            timestamp
            createdAt
            base64
            presentationId
            updatedAt
          }
          nextToken
        }
        userId
        user {
          id
          presentations {
            nextToken
          }
          createdAt
          updatedAt
        }
        updatedAt
      }
      updatedAt
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
        speech
        emotions
        timestamp
        createdAt
        base64
        presentationId
        presentation {
          id
          createdAt
          presentationSlots {
            nextToken
          }
          userId
          user {
            id
            createdAt
            updatedAt
          }
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const presentationsByUser = /* GraphQL */ `
  query PresentationsByUser(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPresentationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    presentationsByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        presentationSlots {
          items {
            id
            speech
            emotions
            timestamp
            createdAt
            base64
            presentationId
            updatedAt
          }
          nextToken
        }
        userId
        user {
          id
          presentations {
            nextToken
          }
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const slotsByPresentation = /* GraphQL */ `
  query SlotsByPresentation(
    $presentationId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPresentationSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SlotsByPresentation(
      presentationId: $presentationId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        speech
        emotions
        timestamp
        createdAt
        base64
        presentationId
        presentation {
          id
          createdAt
          presentationSlots {
            nextToken
          }
          userId
          user {
            id
            createdAt
            updatedAt
          }
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
