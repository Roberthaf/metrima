// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createCamera = `mutation CreateCamera($input: CreateCameraInput!) {
  createCamera(input: $input) {
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
export const updateCamera = `mutation UpdateCamera($input: UpdateCameraInput!) {
  updateCamera(input: $input) {
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
export const deleteCamera = `mutation DeleteCamera($input: DeleteCameraInput!) {
  deleteCamera(input: $input) {
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
