/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePresentation = /* GraphQL */ `
  subscription OnCreatePresentation($owner: String!) {
    onCreatePresentation(owner: $owner) {
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
export const onUpdatePresentation = /* GraphQL */ `
  subscription OnUpdatePresentation($owner: String!) {
    onUpdatePresentation(owner: $owner) {
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
export const onDeletePresentation = /* GraphQL */ `
  subscription OnDeletePresentation($owner: String!) {
    onDeletePresentation(owner: $owner) {
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
export const onCreatePresentationSlot = /* GraphQL */ `
  subscription OnCreatePresentationSlot($owner: String!) {
    onCreatePresentationSlot(owner: $owner) {
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
export const onUpdatePresentationSlot = /* GraphQL */ `
  subscription OnUpdatePresentationSlot($owner: String!) {
    onUpdatePresentationSlot(owner: $owner) {
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
export const onDeletePresentationSlot = /* GraphQL */ `
  subscription OnDeletePresentationSlot($owner: String!) {
    onDeletePresentationSlot(owner: $owner) {
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
