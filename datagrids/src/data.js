let s = 123456789;

const statuses = [{"id":1,"name":"UNPOSTED","color":"#eceff1","sequence":1},{"id":2,"name":"POSTED","color":"#ffeb3b","sequence":2},{"id":4,"name":"COVERED","color":"#b3e5fc","sequence":3},{"id":101,"name":"ETA TO STOP 1","color":"#81d4fa","sequence":21},{"id":102,"name":"AT STOP 1","color":"#4fc3f7","sequence":22},{"id":111,"name":"ETA TO STOP 2","color":"#29b6f6","sequence":24},{"id":112,"name":"AT STOP 2","color":"#03a9f4","sequence":25},{"id":31,"name":"DELIVERED","color":"#76ff03","sequence":31},{"id":41,"name":"TONU","color":"#e57373","sequence":41},{"id":51,"name":"CANCELLED W/ FEE","color":"#e57373","sequence":51},{"id":52,"name":"CANCELLED","color":"#e57373","sequence":52},{"id":61,"name":"POD","color":"#ff8f00","sequence":61},{"id":62,"name":"INVOICE","color":"#ff8f00","sequence":62},{"id":63,"name":"PAID","color":"#64dd17","sequence":63}]
export const statusById = statuses.reduce((curr, item) => {
  return {
    ...curr,
    [item.id]: item,
  }
}, {});

export const random = () => {
  s = (1103515245 * s + 12345) % 2147483647;
  return s % (10 - 1);
}

export const arrayRandomItem = (array) => {
  return array[ Math.floor(Math.random() * array.length) ];
}

export const randomFrom = (numFrom, numRange) => {
  return Math.floor(Math.random() * numRange - numFrom);
}

const emails = ["zilla@gmail.com" ,"gslondon@msn.com" ,"joehall@outlook.com" ,"jlbaumga@msn.com" ,"godeke@comcast.net" ,"kmself@gmail.com" ,"majordick@me.com" ,"aardo@yahoo.ca" ,"osaru@me.com" ,"timtroyr@mac.com" ,"harryh@att.net" ,"rtanter@comcast.net"]
const surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Harris', 'Clark', 'Allen', 'Scott', 'Carter'];
const names = ['James', 'John', 'Robert', 'Christopher', 'George', 'Mary', 'Nancy', 'Sandra', 'Michelle', 'Betty'];
const gender = ['Male', 'Female'];


export const generateData = (count) => {
  let i;
  let items = [];

  for (i = 0; i < count; i++) {
    var item = {
      id: i + 1,
      customer_company: arrayRandomItem(names),
      customer_email: arrayRandomItem(emails),
      status_id: arrayRandomItem(statuses).id,
      rate: randomFrom(100, 0) * 10,
      detention: randomFrom(100, 0) * 10,
      lumper: randomFrom(100, 0) * 10,
      fee: randomFrom(100, 0) * 10,
      total_cost: randomFrom(100, 0) * 10,
      paid_vendor: randomFrom(100, 0) * 10,
      paid_client: randomFrom(100, 0) * 10,
    };
    items.push(item);
  }
  return items;
}