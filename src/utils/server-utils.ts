import 'server-only';

export const ServerSideFunction = () => {
  console.log(`
        use multiple librariries,
        use env variables,
        interact with a database,
        process confidential information
        `);
  return 'Server Function results';
};
