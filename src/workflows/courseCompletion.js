import http from 'k6/http';
import { logIn } from '../utils/auth.js';
import { updateProgress } from '../utils/correlation.js';
import config from '../utils/config.js';

export function courseCompletionWorkflow() {
  const token = logIn(config);

  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  // Get course
  const courseRes = http.get(`${config.baseURL}/courses/${config.courseId}`, params);
  if (courseRes.status !== 200) throw new Error('Get course failed');

  // Get quiz
  const quizRes = http.get(`${config.baseURL}/section-quizzes?course_id=${config.courseId}&section_index=0`, params);
  if (quizRes.status !== 200) throw new Error('Get quiz failed');

  // Complete quiz
  const completeRes = http.post(`${config.baseURL}/courses/${config.courseId}/sections/0/quiz-complete`, null, params);
  if (completeRes.status !== 200) throw new Error('Quiz completion failed');

  // Update progress
  updateProgress(config, token, 8);
}