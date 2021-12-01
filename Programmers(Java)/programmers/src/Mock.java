import java.util.ArrayList;
import java.util.List;

/*
<모의고사>
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.


<나의 풀이>
수포자1: 12345 반복
수포자2: 21232425 반복
수포자3: 3311224455 반복
이므로... 각각 정답 배열하고 비교해서 몇 개가 일치하는지 확인하면 된다.

몹시 간단해 보였는데 자바에서 maxValue를 찾는 메서드가 없어서 헷갈렸다.
기본을 잘 다져야 함을 느낌

 */
public class Mock {
	
	public static void main(String[] args) {
		int[] answers = {1, 2, 3, 4, 5,
				1, 2, 1, 2, 3,
				5, 5, 5, 5, 5, 
				4, 4, 3, 4, 1}; // 인덱스 0~6만 정답(7점)
		solution(answers);
	}
	
	
    public static int[] solution(int[] answers) {
    	int[] giveup_man1 = {1, 2, 3, 4, 5};
    	int hope1 = 0;
    	int[] giveup_man2 = {2, 1, 2, 3, 2, 4, 2, 5};
    	int hope2 = 0;
    	int[] giveup_man3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    	int hope3 = 0;
   	
    	for(int i=0; i<giveup_man1.length; i++) {
    		for(int j=0; j<answers.length; j++) {
    			if(j % 5 == i) {
    				hope1 = answers[j] == giveup_man1[i] ? hope1 + 1 : hope1;
    			}
    		}
    	}
    	for(int i=0; i<giveup_man2.length; i++) {
    		for(int j=0; j<answers.length; j++) {
    			if(j % 8 == i) {
    				hope2 = answers[j] == giveup_man2[i] ? hope2 + 1 : hope2;
    			}
    		}
    	}
    	for(int i=0; i<giveup_man3.length; i++) {
    		for(int j=0; j<answers.length; j++) {
    			if(j % 10 == i) {
    				hope3 = answers[j] == giveup_man3[i] ? hope3 + 1 : hope3;
    			}
    		}
    	}

    	int[] hopes = { hope1, hope2, hope3 };
    	int greatest = hope1 >= hope2 && hope1 >= hope3 ? hope1
    				 : hope2 >= hope3 ? hope2
    				 : hope3;
    	// 동점자는 고려 안한 상태로 어쨌든 제일 큰 수가 greatest에 담겨 있음
    	// 동점자 포함한 배열을 새롭게 만들면 된다.
		List<Integer> answerList = new ArrayList<Integer>();
		for(int i=0; i<hopes.length; i++) {
			if(hopes[i] == greatest) {
				answerList.add(i+1);
			}
		}
		int[] answer = answerList.stream().mapToInt(i -> i).toArray();
        return answer;
    }
}
