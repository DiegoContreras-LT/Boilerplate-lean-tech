import {firebaseApp} from '../index';

const firestore = firebaseApp.firestore();

/**
 * Save item into collection
 * @param {string} collectionName
 * @param {object} item // Eg: {name: string, description: string}
 */
export function storeItem(item, collectionName) {
    const testCollectionRef = firestore.collection(collectionName);
    return testCollectionRef.add(item);
}