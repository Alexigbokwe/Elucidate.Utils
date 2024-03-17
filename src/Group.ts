/**
 * ExpressWebJs.util.Group
 * ________________________________________________________________
 * A container object which enables you group an array of elements by value.
 * @Since ExpressWebJs version 4
 */

type objectType = { [key: string | number]: any };

export class Group {
  /**
   * Group an element in the array by a value
   * @param dataList
   * @param fn
   * @example: Group.anElementBy(users,(user)=>user.first_name)
   */
  static anElementBy<T>(dataList: objectType[], fn: (dt: objectType) => string | number) {
    const data: Record<string, T> = {};
    if (dataList?.length) {
      let record: objectType[] = dataList;
      dataList.forEach((data) => {
        const groupId = fn(data);
        if (data[groupId] === undefined) {
          data[groupId] = data;
        }
      });
    }
    return data;
  }

  /**
   * Group all elements in the array by a value
   * @param dataList
   * @param fn
   * @returns
   */
  static allElementsBy<T>(dataList: objectType[], fn: (dt: objectType) => string | number) {
    const data: Record<string, T[]> = {};
    for (const data of dataList) {
      const groupId = fn(data);
      if (!data[groupId]) {
        data[groupId] = [];
      }
      data[groupId].push(data);
    }
    return data;
  }
}
