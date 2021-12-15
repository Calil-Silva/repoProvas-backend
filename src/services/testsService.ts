import * as testRepository from '../repositories/testsRepository';

async function findTests() {
  const tests = await testRepository.getAllTests();

  return tests;
}

export { findTests };
