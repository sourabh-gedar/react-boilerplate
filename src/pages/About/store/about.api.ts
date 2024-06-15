export const queries = {
    getUser: {
      query: () => ({
        url: `users`,
        method: 'GET',
      }),
    }
  } as const;
  