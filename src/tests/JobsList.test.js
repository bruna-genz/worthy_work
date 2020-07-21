import * as JobsList from '../containers/JobsList';

describe('FormatedData function', () => {
  let jobs;

  beforeEach(() => {
    jobs = [];
    let i = 0;
    while (i <= 5) {
      jobs.push({
        id: 123,
        fields: {
          title: 'title',
          source: [{ name: 'company title' }],
          country: [{ name: 'France' }],
          date: {
            created: new Date(),
            closing: new Date(),
          },
          url: 'url',
        },
      });
      i += 1;
    }
  });

  test('return a new array', () => {
    const result = JobsList.formatedData(jobs);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test('array elements are objects with the required properties', () => {
    const result = JobsList.formatedData(jobs);
    expect(result[0]).toHaveProperty('id', 'title', 'company', 'date', 'url');
  });

  test('if a job have country, country value returns the name', () => {
    const result = JobsList.formatedData(jobs);
    expect(result[0].company.country).toBe('France');
  });

  test('if a job does not have country, country value returns Remote', () => {
    jobs[0].fields.country = undefined;
    const result = JobsList.formatedData(jobs);
    expect(result[0].company.country).toBe('Remote');
  });
});

describe('mapCountries function', () => {
  let jobs;

  beforeEach(() => {
    jobs = [];
    const countries = ['France', 'Canada', 'EUA', 'Japan', 'Remote', 'France'];

    countries.forEach(countryName => {
      jobs.push({ company: { country: countryName } });
    });
  });

  test('returned array has all country names plus "All"', () => {
    const expected = ['All', 'France', 'Canada', 'EUA', 'Japan', 'Remote'];
    const result = JobsList.mapCountries(jobs);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  test('returned array does not have duplicates', () => {
    const result = JobsList.mapCountries(jobs);
    const hasDuplicates = array => new Set(array).size === array.length;
    expect(hasDuplicates(result)).toBeTruthy();
  });
});

describe('renderHelper function', () => {
  let jobs;

  beforeEach(() => {
    jobs = [];
    const countries = ['France', 'Canada', 'EUA', 'Japan', 'Remote', 'France', 'Canada', 'France'];

    countries.forEach(countryName => {
      jobs.push({ company: { country: countryName } });
    });
  });

  test('if filter is "France", returns array with 3 elements', () => {
    const result = JobsList.renderHelper('France', jobs);
    expect(result.length).toEqual(3);
  });

  test('if filter is "Japan", returns array with 1 elements', () => {
    const result = JobsList.renderHelper('Japan', jobs);
    expect(result.length).toEqual(1);
  });

  test('if filter is "All", returns same array', () => {
    const result = JobsList.renderHelper('All', jobs);
    expect(result).toEqual(expect.arrayContaining(jobs));
  });
});
