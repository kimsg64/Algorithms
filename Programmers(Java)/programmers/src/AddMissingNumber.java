/*
<없는 숫자 더하기>
0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다.
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 수 ≤ 9
numbers의 모든 수는 서로 다릅니다.

풀이:
0~9의 합은 45이므로 45에서 numbers의 모든 수의 합을 빼면 됨
*/
public class AddMissingNumber {
    public int solution(int[] numbers) {
    	int answer = 45;
    	for(int i=0; i<numbers.length; i++) {
    		answer -= numbers[i];
    	}
        return answer;
    }
}
