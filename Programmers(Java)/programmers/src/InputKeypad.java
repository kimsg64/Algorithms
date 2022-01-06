/*
<키패드 누르기>
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
1 2 3
4 5 6
7 8 9
* 0 #
  ✆

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
   4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
   
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

[제한사항]
numbers 배열의 크기는 1 이상 1,000 이하입니다.
numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
hand는 "left" 또는 "right" 입니다.
"left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.

<풀이>
1, 4, 7은 L
3, 6, 9는 R
2, 5, 8, 0은 직전 상태의 왼손과 오른손의 위치 및 주 손가락에 따라 바뀜
따라서 직전 상태의 왼손과 오른손의 위치를 저장할 변수, 거기서 현재 키까지의 거리를 저장할 변수를 만들고 이를 체크하면 될 듯
초기값인 *, #는 각각 30, 32로 바꿔서 거리 계산(30, 32인 이유는 그냥 안 겹치게 하려고...)

절대값을 기준으로
타겟이 2, 5, 8일 때
직전 상태 - 타겟 위치 == 1 이면 바로 옆(d=1)
직전 상태 - 타겟 위치 == 2 or 4면 한 칸 위나 아래(d=2)
직전 상태 - 타겟 위치 == 5 or 7이면 두 칸 위나 아래(d=3)
이것은 왼손/오른손이 각각 왼쪽/오른쪽에 있다는 가정 하에 된 것이고... 2 5 8 0이 연속으로 발생하는 경우가 있음
직전 상태 - 타겟 위치 == 3이면 2, 5, 8의 각각 위나 아래(d=1), 6이면 d=2
직전 상태가 0일 때가 빠져있다... => ???????????

타겟이 0일 때는 겹치는 것들이 있으므로 먼저 걸러 주기
직전 상태 - 타겟 위치 == 2, 5, 8이면 각각 3, 2, 1
직전 상태 - 타겟 위치 == 7 or 9이면 직전 상태가 7 or 9



<풀이2>
첫 번째 풀이로 하면 조건이 계속 생겨 나니까 아예 자판을 좌표로 만들어 보았다.
첫 번째 풀이는 폐기해야 마땅함
1 2 3
4 5 6
7 8 9
* 0 #
을 (x, y) 형태의 이차원 배열로 바꾸면
(0, 0) (1, 0) (2, 0)
(0, 1) (1, 1) (2, 1)
(0, 2) (1, 2) (2, 2)
(0, 3) (1, 3) (2, 3)
형태가 된다.
x좌표가 0일 때는 모두 R, 2일 때는 모두 L이며, 1일 때는 거리를 계산하면 된다.
거리는 절댓값 기준으로 (targetX - prevX) + (targetY - prevY)가 된다.


*/
public class InputKeypad {
    public static String solution(int[] numbers, String hand) {
        String answer = "";
        // 인덱스 = 키패드 숫자로 맞춰서 coords를 작성, 인덱스 10, 11은 각각 *과 #(초기값)
        int[][] coords = {{1, 3}, {0, 0}, {1, 0}, {2, 0}, {0, 1}, {1, 1}, {2, 1}, {0, 2}, {1, 2}, {2, 2}, {0, 3}, {2, 3}};
        int[] prevL = coords[10];
        int[] prevR = coords[11];
        for(int i=0; i<numbers.length; i++) {
        	if(numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) {
        		// 1, 4, 7이 나오는 경우는 왼손
        		prevL = coords[numbers[i]];
        		answer += "L";
        	} else if(numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) {
        		// 3, 6, 9가 나오는 경우는 오른손
        		prevR = coords[numbers[i]];
        		answer += "R";
        	} else {
        		// 2, 5, 8, 0이 나오는 경우는 거리 계산 (target 좌표는 coords[i])
        		int distanceFromPrevL = Math.abs(coords[numbers[i]][0] - prevL[0]) + Math.abs(coords[numbers[i]][1] - prevL[1]);
        		int distanceFromPrevR = Math.abs(coords[numbers[i]][0] - prevR[0]) + Math.abs(coords[numbers[i]][1] - prevR[1]); 
        		// 거리가 더 짧은 쪽 선택
        		if(distanceFromPrevR > distanceFromPrevL) {
        			prevL = coords[numbers[i]];
        			answer += "L";
        		} else if(distanceFromPrevR < distanceFromPrevL) {
        			prevR = coords[numbers[i]];
        			answer += "R";
        		} else {
        			// 거리가 같은 경우 hand에 따라 선택
        			if(hand.equals("left")) {
        				prevL = coords[numbers[i]];
        				answer += "L";
        			} else {
        				prevR = coords[numbers[i]];
        				answer += "R";
        			}
        		}
        	}
        }
        return answer;
    }
}
