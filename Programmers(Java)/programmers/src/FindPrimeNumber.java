import java.util.ArrayList;
import java.util.List;

/*

<소수 찾기>
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.

<풀이>
1. 먼저 n이 소수인지를 판단하는 식을 만듦 -> 2부터 n-1까지 나눠서 전부 나누어 떨어지지 않으면 소수(약수가 없으면 소수)
근데 가만 생각해 보면 2부터 n까지 전부 볼 필요 없고... n/2까지만 봐도 된다.
이를테면 96이 소수인지를 판별할 때, 96, 95, ... 49( > 96//2)로 나누어지는지는 확인할 필요가 없다.
왜냐하면 1보다 큰 가장 작은 자연수인 2에 대응하는 약수가 48이므로, 48보다 큰 수로 나누어 떨어질 수가 없기 때문이다.

2. 1을 2부터 n까지 실시

라고 생각했는데 이것도 시간 제한에 걸리므로 에라토스테네스의 체를 활용해서 루트n까지만 확인하자.

라고 생각했는데 이것도 효율성 테스트에서 걸린다.
효율성 테스트를 통과하기 위한 정수론적 지식 몇 가지가 필요한데,
 ① 1보다 큰 자연수는 모두 소수의 곱으로 이루어져 있다. => 소수가 아닌 수로 나누어서 체크할 필요는 없다. 소수인 경우는 primeNumbers 배열을 만들어서 삽입
 ② n의 제곱근보다 작은 소수로 나누어 떨어지지 않으면 n은 소수이다. => n의 제곱근까지만 확인하면 된다.
 ③ 2보다 큰 짝수는 모두 소수가 아니다. => 홀수만 검사하면 된다.

 */
public class FindPrimeNumber {
	
	public static void main(String args[]) {
		solution(101);
	}
	
    public static int solution(int n) {
    	List<Integer> primeNumbers = new ArrayList<Integer>();
    	System.out.println("입력된 n: " + n);
    	
    	// 1~n 사이에 있는 소수의 개수를 확인해야 하므로 2~n까지 소수인지를 판별
    	for(int i=2; i<=n; i++) {
    		System.out.println(i + "는 소수인가? 판별 시작");
    		// i = 2, 3, 4, 5, 6, ... n이 각각 소수인지를 체크
    		// 각각 sqrt(i)보다 작은 소수로 나누어 떨어지는지를 확인하고, 나누어 떨어지지 않으면 primeNumbers에 입력하되, 2와 3은 소수이므로 선입력
    		if(i == 2 || i == 3) {
    			System.out.println(i + "는 기본 소수라서 입력함");
    			primeNumbers.add(i);
    		} else {
    			if(i % 2 == 0) {
    				System.out.println( i + "는 짝수이므로 소수가 아닙니다.");
    				continue;
    			}
    			for(int j=0; j<primeNumbers.size(); j++) {
    				System.out.println(i + "는 " + i + "의 제곱근(내림)인 " + (int)Math.sqrt(i) + "보다 작은 primeNumbers의 " + j + "번째 원소인 " + primeNumbers.get(j) + "으로 나누어 떨어지는가");
    				if(primeNumbers.get(j) <= (int)Math.sqrt(i)) {
    					if(i % primeNumbers.get(j) == 0) {
    						System.out.println("네... 너는 소수가 아니란다.");
    						break;
    					} else {
    						System.out.println("아닌데? 아직 모른다");
    						if(j == primeNumbers.size()-1) {
    							System.out.println("마지막까지 버틴 당신... 소수로 인정합니다.");
    							primeNumbers.add(i);
    							break;
    						}
    					}    					
    				} else {
    					System.out.println("마지막까지 버틴 당신... 소수로 인정합니다.");
    					primeNumbers.add(i);
						break;
    				}
    			}    			
    		}
    	}
    	
    	System.out.print("primeNumbers 현황: [");
    	for(int i=0; i<primeNumbers.size(); i++) {
    		if(i != primeNumbers.size()-1) {
    			System.out.print(primeNumbers.get(i) + ", ");    			
    		} else {
    			System.out.print(primeNumbers.get(i));
    		}
    	}
    	System.out.print("]");
    	
    	int answer = primeNumbers.size();
        return answer;
    }
}
