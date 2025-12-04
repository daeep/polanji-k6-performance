import { courseCompletionWorkflow } from '../workflows/courseCompletion.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import config from '../utils/config.js';

export let options = {
  stages: config.loadTest.stages,
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.1']
  }
};

export default function () {
  courseCompletionWorkflow();
}

export function handleSummary(data) {
  return {
    'output/loadTestSummary.html': htmlReport(data)
  };
}