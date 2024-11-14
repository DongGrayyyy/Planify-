import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';
export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.ed.planify',
    projectId: '66f79a000027c5e6ccb6',
    databaseId: '66f79c030007ad7c9dba',
    userCollectionId: '66f79c3c000b986ba857',
    videosCollectionId: '66f79cab00310babbdd4',
    storageId: '66f79e1a001fa65d8061',
}
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 
;

const account = new Account(client);
const avatars =  new Avatars(client);
const databases = new Databases(client);


export const createUser = async (email, password, username) => {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      )

      if(!newAccount) throw Error;

        const avatarURL = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.userCollectionId,
          ID.unique(),
          {
            accountid: newAccount.$id,
            email,
            username,
            avatar: avatarURL
          }
        )

        return newUser;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
}

// Creating Session
//export async function signIn(email, password){
  //try {
    //const session = await account.createEmailPasswordSession(email, password)
    
    //return session;
  //} catch (error) {
    //throw new Error(error);
  //}
//} 

// Deleting Session
export const signIn = async (email, password) => {
  try {
    await account.deleteSession("current");
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

