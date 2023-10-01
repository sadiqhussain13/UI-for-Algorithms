class Solution {
    boundaryTraversal(matrix, n, m) {
        const result = [];

        for (let i = 0; i < m; i++) {
            result.push(matrix[0][i]);
        }

        for (let i = 1; i < n; i++) {
            result.push(matrix[i][m - 1]);
        }

        if (n > 1 && m > 1) {
            for (let i = m - 2; i >= 0; i--) {
                result.push(matrix[n - 1][i]);
            }
        }

        if (n > 2 && m > 1) {
            for (let i = n - 2; i > 0; i--) {
                result.push(matrix[i][0]);
            }
        }

        return result;
    }
}

function performTraversal() {
  const n = parseInt(document.getElementById('rows').value);
  const m = parseInt(document.getElementById('cols').value);
  const matrix = [];
  
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < m; j++) {
      const val = parseInt(document.getElementById(`element-${i}-${j}`).value);
      matrix[i].push(val);
    }
  }

  const solution = new Solution();
  const result = solution.boundaryTraversal(matrix, n, m);
  document.getElementById('result').innerText = result.join(' ');
}

function createMatrixInputs() {
  const rows = parseInt(document.getElementById('rows').value);
  const cols = parseInt(document.getElementById('cols').value);

  const matrixInputs = document.getElementById('matrixInputs');
  matrixInputs.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.id = `element-${i}-${j}`;
      input.placeholder = `Element ${i + 1}-${j + 1}`;
      matrixInputs.appendChild(input);
    }
    matrixInputs.appendChild(document.createElement('br'));
  }
}

document.getElementById('rows').addEventListener('input', createMatrixInputs);
document.getElementById('cols').addEventListener('input', createMatrixInputs);
