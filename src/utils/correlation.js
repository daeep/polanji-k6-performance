import http from 'k6/http';

export function updateProgress(config, token, progress) {
  const payload = JSON.stringify({
    course_id: config.courseId,
    user_id: config.userId,
    progress: progress
  });

  const res = http.put(`${config.baseURL}/courses/update_progress`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (res.status !== 200) {
    throw new Error('Update progress failed');
  }

  return res;
}