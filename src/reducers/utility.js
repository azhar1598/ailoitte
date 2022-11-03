export const addMember = (members, data) => {
  const { domain, candidate } = data.payload;
  let member;
  let domainAvailable = members.find((item) => {
    if (item.id == domain.id) {
      item.candidate.push(candidate);
      return item;
    }
  });
  if (domainAvailable) return members;
  else {
    member = {
      id: domain.id,
      role: domain.role,
      candidate: [candidate],
    };
    return [...members, member];
  }
};

export const removeMember = (members, data) => {
  const { domain, candidate } = data.payload;

  console.log("received", members, data, domain, candidate);

  let member;
  let domainAvailable = members.find((item) => {
    if (item.id == domain.id) {
      let ii = item.candidate.filter((i, index) => {
        if (i.id == candidate.id) {
          item.candidate.splice(index, 1);
        }
      });
      return item;
    }
  });
  if (domainAvailable) return members;
  else {
    member = {
      id: domain.id,
      role: domain.role,
      candidate: [candidate],
    };
    return [...members, member];
  }
};
