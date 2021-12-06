/*
<다트 게임>
카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

1. 다트 게임은 총 3번의 기회로 구성된다.
2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
4. 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
5. 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
6. 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
7 .스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
8. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
9. 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

입력 형식
"점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
예) 1S2D*3T

점수는 0에서 10 사이의 정수이다.
보너스는 S, D, T 중 하나이다.
옵선은 *이나 # 중 하나이며, 없을 수도 있다.

출력 형식
3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.
예) 37


<풀이> 길이가 어지간히 긴 것으로 보아 순서대로 구현하면 되는 구현 문제이다.
점수 계산 조건을 정리해 보면
1. 정수+SDT 가 3번 반복 (k라고 하자)
2. 각각의 k에 * or #이 붙을수도 있고 붙지 않을 수도 있다.
3. *는 직전 k와 해당 k를 2배로(직전 k가 없으면 해당 k만 2배), #는 해당 k를 -로 만들고, *는 *나 #와 중첩 가능

막상 풀어 보니 세 번의 시도를 나누고 나면 아스키 코드를 이용해 쉽게 풀 수 있었다.
다만 함수를 하나 더 만들 수 있었다면 코드 길이를 상당히 줄일 수 있었을텐데

*/
public class DartGame {
	
	public static void main(String[] args) {
		solution("1D2S0T");
	}
	
    public static int solution(String dartResult) {
    	int firstScore = 0;
    	int secondScore = 0;
    	int thirdScore = 0;
    	
    	if(dartResult.contains("10")) {
    		dartResult = dartResult.replaceAll("10", ":");
    	}
    	int tries = 0;
    	for(int i=0; i<dartResult.length(); i++) {
    		char ascii = dartResult.substring(i, i+1).charAt(0);
			if('0' <= ascii && ascii <= ':') {
				tries++;
				if (tries == 1) {
					firstScore = ascii - 48;
				} else if (tries == 2) {
					secondScore = ascii - 48;
				} else if (tries == 3){
					thirdScore = ascii - 48;;
				}				
			} else if(ascii == 'D') {
				if(tries == 1) {
					firstScore *= firstScore; 
				} else if(tries == 2) {
					secondScore *= secondScore;
				} else if(tries == 3) {
					thirdScore *= thirdScore;
				}
			} else if(ascii == 'T') {
				if(tries == 1) {
					firstScore *= firstScore * firstScore; 
				} else if(tries == 2) {
					secondScore *= secondScore * secondScore;
				} else if(tries == 3) {
					thirdScore *= thirdScore * thirdScore;
				}
			} else if (ascii == '#') {
				if(tries == 1) {
					firstScore *= -1; 
				} else if(tries == 2) {
					secondScore *= -1;
				} else if(tries == 3) {
					thirdScore *= -1;
				}
			} else if (ascii == '*') {
				if(tries == 1) {
					firstScore *= 2;
				} else if(tries == 2) {
					firstScore *= 2;
					secondScore *= 2;
				} else if(tries == 3) {
					secondScore *= 2;
					thirdScore *= 2;
				}
			}
    	}
    	System.out.println(firstScore);
    	System.out.println(secondScore);
    	System.out.println(thirdScore);
    	
        int answer = firstScore + secondScore + thirdScore;
        System.out.println(answer);
        return answer;
    }
}
