// lib/algolia.js
import algoliasearch from 'algoliasearch';

const client = algoliasearch('8SU49KR6BM', 'aee7910f25a037c8a097c6ae46f82a61');
const index = client.initIndex('Kitchen cabinet');

export { index };