export default [
  {
    url: `/module/user/login`,
    method: "post",
    response: (req: { body: { name: any; }; }) => {
      return {
        header: {
          code: 0,
          msg: "OK",
        },
        body: {
          userId: "001",
          name: `${req.body.name}小明`,
        },
      };
    },
  },
];
