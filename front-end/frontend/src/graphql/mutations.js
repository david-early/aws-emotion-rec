/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPresentation = /* GraphQL */ `
  mutation CreatePresentation(
    $input: CreatePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    createPresentation(input: $input, condition: $condition) {
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
export const updatePresentation = /* GraphQL */ `
  mutation UpdatePresentation(
    $input: UpdatePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    updatePresentation(input: $input, condition: $condition) {
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
export const deletePresentation = /* GraphQL */ `
  mutation DeletePresentation(
    $input: DeletePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    deletePresentation(input: $input, condition: $condition) {
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
export const createPresentationSlot = /* GraphQL */ `
  mutation CreatePresentationSlot(
    $input: CreatePresentationSlotInput!
    $condition: ModelPresentationSlotConditionInput
  ) {
    createPresentationSlot(input: $input, condition: $condition) {
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
export const updatePresentationSlot = /* GraphQL */ `
  mutation UpdatePresentationSlot(
    $input: UpdatePresentationSlotInput!
    $condition: ModelPresentationSlotConditionInput
  ) {
    updatePresentationSlot(input: $input, condition: $condition) {
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
export const deletePresentationSlot = /* GraphQL */ `
  mutation DeletePresentationSlot(
    $input: DeletePresentationSlotInput!
    $condition: ModelPresentationSlotConditionInput
  ) {
    deletePresentationSlot(input: $input, condition: $condition) {
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
