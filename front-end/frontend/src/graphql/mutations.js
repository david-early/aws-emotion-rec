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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPresentation = /* GraphQL */ `
  mutation CreatePresentation(
    $input: CreatePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    createPresentation(input: $input, condition: $condition) {
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
export const updatePresentation = /* GraphQL */ `
  mutation UpdatePresentation(
    $input: UpdatePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    updatePresentation(input: $input, condition: $condition) {
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
export const deletePresentation = /* GraphQL */ `
  mutation DeletePresentation(
    $input: DeletePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    deletePresentation(input: $input, condition: $condition) {
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
export const createPresentationSlot = /* GraphQL */ `
  mutation CreatePresentationSlot(
    $input: CreatePresentationSlotInput!
    $condition: ModelPresentationSlotConditionInput
  ) {
    createPresentationSlot(input: $input, condition: $condition) {
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
export const updatePresentationSlot = /* GraphQL */ `
  mutation UpdatePresentationSlot(
    $input: UpdatePresentationSlotInput!
    $condition: ModelPresentationSlotConditionInput
  ) {
    updatePresentationSlot(input: $input, condition: $condition) {
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
export const deletePresentationSlot = /* GraphQL */ `
  mutation DeletePresentationSlot(
    $input: DeletePresentationSlotInput!
    $condition: ModelPresentationSlotConditionInput
  ) {
    deletePresentationSlot(input: $input, condition: $condition) {
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
