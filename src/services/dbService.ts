import { openDatabase } from 'expo-sqlite';

const db = openDatabase('test.db');

const createPostsTableQuery = `CREATE TABLE IF NOT EXISTS 'posts' (
  'id' integer not null primary key autoincrement,
  'created_at' datetime not null default CURRENT_TIMESTAMP,
  'shortcode' varchar(255) null,
  'height' INT null,
  'width' INT null,
  'is_video' BOOLEAN null default false,
  'owner_id' varchar(255) null,
  'owner_username' varchar(255) null,
  'owner_profile_pic_url' varchar(255) null
)`;

const createPostsTable = () => db.transaction(tx => tx.executeSql(createPostsTableQuery));

// const createPostItemsTableQuery = '';
// const createPostItemsTable = () => db.transaction(tx => tx.executeSql(createPostItemsTableQuery));

function createTablesIfNotExists() {
    createPostsTable();
}

const DbService = {};
export default DbService;