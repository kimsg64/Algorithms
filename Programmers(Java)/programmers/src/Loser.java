import java.util.Arrays;

/*
	<완주하지 못한 선수>
	
	수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
	
	마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
	
	제한사항
	마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
	completion의 길이는 participant의 길이보다 1 작습니다.
	참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
	참가자 중에는 동명이인이 있을 수 있습니다.
*/
public class Loser {
	public static String solution(String[] participant, String[] completion) {
		String answer = "";
	    Arrays.sort(participant);
	    Arrays.sort(completion);
		// 모든 완주자에 대해 비교해서
		// "정렬 후 완주자 != 정렬 후 참가자"가 되는 시점에서의 participant[i]가 완주하지 못한 선수
		// "정렬 후 완주자 != 정렬 후 참가자"가 되는 시점이 없다면 participant의 마지막 요소가 완주하지 못한 선수
		for(int i=0; i<completion.length; i++) {
			if(!completion[i].equals(participant[i])) {
				answer = participant[i];
                break;
			}
		}
		if(answer.equals("")) {
			answer = participant[participant.length - 1];
		}
	    return answer;
	}
}


/*

★★★★★
==는 좌항과 우항의 주소값을 비교하는 비교 연산자, equals()는 메소드의 대상과 파라미터의 내용을 비교하는 메소드이므로
원시 타입이 아닌 String을 비교할 때, 같은 내용이라도 다른 주소를 가질 수 있으므로 내용만 비교하려면 equals()를 써야 한다!

*/