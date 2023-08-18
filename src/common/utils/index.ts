const filterFetchedArray = (array: any[]) => {
  const tempFetchedList = [...array];
  const fetchedList = Array.from(new Set(tempFetchedList.map((a) => a.id))).map(
    (id) => tempFetchedList.find((a) => a.id === id),
  );
  return fetchedList;
};

const mergeObjects = (target: any, source: any) => {
  // Iterate through `source` properties and if an `Object` then
  // set property to merge of `target` and `source` properties
  Object.keys(source)?.forEach((key) => {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], mergeObjects(target[key], source[key]));
    }
  });

  // Join `target` and modified `source`
  Object.assign(target || {}, source);
  return target;
};

const mapForSelectOption = (label: string, value: string) => {
  const result = {
    label,
    value,
  };
  return result;
};

// map array for input selection and sort in ascending order a-z
const mapAndSortForSelectOption = (
  array: any[],
  labelProperty: string,
  valueProperty: string,
) => {
  const m = array
    .map((item: any) => {
      const result = {
        label: item[labelProperty],
        value: item[valueProperty],
      };
      return result;
    })
    .sort((a: any, b: any) => a.label.localeCompare(b.label));
  return m;
};

// return status details by status code received from Beebox
const getStatusComments = (statusNumber: number) => {
  const statuses: any = {
    1: {
      backgroundColor: "#5cb85c",
      statusc: "Ready",
      comments: "File translated and ready to download.",
    },
    6: {
      backgroundColor: "#f0ad4e",
      statusc: "Translating",
      comments: "Translation workflow in progress.",
    },
    7: {
      backgroundColor: "#428bca",
      statusc: "Translated",
      comments: "Translation finished but not yet downloadable.",
    },
    10: {
      backgroundColor: "#e94e2c",
      statusc: "Cancelled",
      comments: "Translation workflow cancelled.",
    },
    default: null,
  };
  const result = statuses[statusNumber] ?? statuses.default;
  return result;
};

// field exclusion
// excludes properties keys from object before sending out for translation.
/* eslint-disable @typescript-eslint/naming-convention */
const excludeFields = (object: any, keys: any) =>
  keys.reduce((o: any, k: any) => {
    const { [k]: _, ...p } = o;
    return p;
  }, object);

export default {
  filterFetchedArray,
  mergeObjects,
  mapForSelectOption,
  mapAndSortForSelectOption,
  getStatusComments,
};
