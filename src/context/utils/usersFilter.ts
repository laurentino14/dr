export type UsersSocketArray = {
  userID: string;
  socketID: string;
  connected: boolean;
  self: boolean;
};

export const userFilter = (users: [UsersSocketArray], user, socket) => {
  let usersOnline = [];
  let us = users;
  us.forEach(user => {
    usersOnline.push({
      userID: user.userID,
      socketID: user.socketID,
      connected: user.connected,
      self: user.socketID === socket.id,
    });
  });

  usersOnline = usersOnline.sort((a, b) => {
    if (a.self) return -1;
    if (b.self) return 1;
    if (a.userID < b.userID) return -1;
    return a.userID > b.userID ? 1 : 0;
  });
  let myUser = usersOnline.find(
    item => item.socketID === socket.id && item.userID === user?.id,
  );
  usersOnline = usersOnline.filter(item => item.userID !== user?.id);

  usersOnline.unshift(myUser);
  return usersOnline;
};
