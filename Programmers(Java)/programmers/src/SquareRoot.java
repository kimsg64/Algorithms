/*
<정수 제곱근 판별>
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

제한 사항
n은 1이상, 50000000000000 이하인 양의 정수입니다.

<풀이>
n의 약수의 개수가 홀수 개이면 x의 제곱이다.
반복문을 돌려서 풀어도 되겠지만... n이 50000000000000인 경우에는 최대 25000000000000번을 확인해야 해서 비효율적듯...?

=> 해봤는데 역시 안됨(시간 초과) => 그냥 Math를 쓰세용

*/

public class SquareRoot {
	
    public long badSolution(long n) {
        long divisors = 0;
        long squareRoot = 0;
        for(long i=2; i<=n/2; i++) {
        	if(n % i == 0) {
        		divisors++;
        		if(i * i == n) {
        			squareRoot = i;        			
        		} 
        	}
        }
        long answer = 0;
        answer = divisors % 2 == 0 ? -1 : (squareRoot+1) * (squareRoot+1);
        return answer;
    }
    
    public long solution(long n) {
    	double squareRoot = Math.abs(Math.sqrt(n));
    	long x = (long)squareRoot;
    	long answer = squareRoot - x == 0 ? (x + 1) * (x + 1) : -1;
    	return answer;
    }
}
