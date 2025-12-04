export default {
  "baseURL": "https://api.polanji.com",
  "credentials": {
    "username": "performancetest09@gmail.com",
    "password": "user123456"
  },
  "courseId": 19,
  "userId": 13,
  "loadTest": {
    "stages": [
      { "duration": "30s", "target": 5 },
      { "duration": "30s", "target": 10 },
      { "duration": "30s", "target": 0 }
    ]
  },
  "stressTest": {
    "stages": [
      { "duration": "30s", "target": 10 },
      { "duration": "30s", "target": 20 },
      { "duration": "30s", "target": 0 }
    ]
  }
};