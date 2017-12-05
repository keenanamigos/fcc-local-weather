export class ObjectHelper {
	static isObjectNullOrEmpty(object) {
		if (object === null || typeof object === "undefined") return true;

		if (object.constructor !== Object) throw new TypeError(`${object} is not an Object.`); 

		if (Object.keys(object).length === 0 && object.constructor === Object) return true;

		return false;
	}
}