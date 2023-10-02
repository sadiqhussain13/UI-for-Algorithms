function calculateDistinctSubsequences() {
    const inputString = document.getElementById('inputString').value;
    const solution = new Solution();
    const result = solution.distinctSubsequences(inputString);
    document.getElementById('result').innerText = `Distinct subsequences: ${result}`;
}

class Solution {
    distinctSubsequences(str) {
        const MOD = 1000000007;
        const n = str.length;
        const dp = new Array(n + 1).fill(0);
        const lastOccurrence = new Array(26).fill(-1);
        
        dp[0] = 1;
        
        for(let i=1; i<=n; i++) {
            dp[i]=(2 * dp[i-1])%MOD;
            
            const prevOccurrence = lastOccurrence[str[i-1].charCodeAt(0) - 'a'.charCodeAt(0)];
            if(prevOccurrence !== -1) {
                dp[i] = (dp[i] - dp[prevOccurrence] + MOD) % MOD;
            }
            
            lastOccurrence[str[i - 1].charCodeAt(0)-'a'.charCodeAt(0)] = i - 1;
            
            // dp[i]=(dp[i] + 1) % MOD;
        }
        
        return dp[n];
    }
}
