# Polanji K6 Performance Testing

## Overview
Modular k6 framework for testing the **Course Completion Workflow** on [polanji.com](https://www.polanji.com).

## Structure
- `src/workflows/` – reusable business flows
- `src/utils/` – auth, correlation, config
- `src/tests/` – load & stress test scenarios
- `config/` – externalized test config
- `output/` – test reports

## Run Tests

### Load Test
```bash
k6 run src/tests/loadTest.js