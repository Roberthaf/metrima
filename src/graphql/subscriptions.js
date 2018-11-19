// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    name
    role
    admin
    email
    company
    cameras {
      items {
        id
        location
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    name
    role
    admin
    email
    company
    cameras {
      items {
        id
        location
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    name
    role
    admin
    email
    company
    cameras {
      items {
        id
        location
      }
      nextToken
    }
  }
}
`;
export const onCreateCamera = `subscription OnCreateCamera {
  onCreateCamera {
    id
    location
    owner {
      id
      name
      role
      admin
      email
      company
    }
  }
}
`;
export const onUpdateCamera = `subscription OnUpdateCamera {
  onUpdateCamera {
    id
    location
    owner {
      id
      name
      role
      admin
      email
      company
    }
  }
}
`;
export const onDeleteCamera = `subscription OnDeleteCamera {
  onDeleteCamera {
    id
    location
    owner {
      id
      name
      role
      admin
      email
      company
    }
  }
}
`;
