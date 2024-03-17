"use strict";
/**
 * ExpressWebJs.util.Group
 * ________________________________________________________________
 * A container object which enables you group an array of elements by value.
 * @Since ExpressWebJs version 4
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
class Group {
    /**
     * Group an element in the array by a value
     * @param dataList
     * @param fn
     * @example: Group.anElementBy(users,(user)=>user.first_name)
     */
    static anElementBy(dataList, fn) {
        const data = {};
        if (dataList?.length) {
            let record = dataList;
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
    static allElementsBy(dataList, fn) {
        const data = {};
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
exports.Group = Group;
