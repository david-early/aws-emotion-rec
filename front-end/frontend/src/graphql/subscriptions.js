/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePresentation = /* GraphQL */ `
  subscription OnCreatePresentation {
    onCreatePresentation {
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
export const onUpdatePresentation = /* GraphQL */ `
  subscription OnUpdatePresentation {
    onUpdatePresentation {
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
export const onDeletePresentation = /* GraphQL */ `
  subscription OnDeletePresentation {
    onDeletePresentation {
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
export const onCreatePresentationSlot = /* GraphQL */ `
  subscription OnCreatePresentationSlot {
    onCreatePresentationSlot {
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
export const onUpdatePresentationSlot = /* GraphQL */ `
  subscription OnUpdatePresentationSlot {
    onUpdatePresentationSlot {
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
export const onDeletePresentationSlot = /* GraphQL */ `
  subscription OnDeletePresentationSlot {
    onDeletePresentationSlot {
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
