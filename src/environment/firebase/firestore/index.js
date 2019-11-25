import {firebaseApp} from '../index';

const firestore = firebaseApp.firestore();

/**
 * Save item into collection
 * @param {string} collectionName
 * @param {object} item // Eg: {name: string, description: string}
 */
export function addItem(item, collectionName) {
    const testCollectionRef = firestore.collection(collectionName);
    return testCollectionRef.add(item);
}

export async function storeItem (item, collectionName, docId) {
    const testCollectionRef = firestore.collection(collectionName).doc(docId);
    return testCollectionRef.set(item);
}

export async function getCollection (collectionName) {
    const collection = await firestore.collection(collectionName).get()
    return collection.docs.map(doc => doc.data())
}

export async function getItem (collectionName, docId) {
    const collection = await firestore.collection(collectionName).doc(docId).get()
    return collection ? collection.data() : null
}
