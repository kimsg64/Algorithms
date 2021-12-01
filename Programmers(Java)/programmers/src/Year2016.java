/*
<2016년>

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

<풀이>
각 월의 마지막 날짜를 배열로 넣고
a월 b일 => 1월 1일(금)로부터 지난 일수로 환산한 뒤,
7로 나눈 나머지에 따라 다른 값을 넣으면 된다.
나머지가 0이면 FRI, 1이면 SAT ...
나머지와 인덱스를 맞추기 위해 days 배열은 FRI부터 시작하면 편하다

*/
public class Year2016 {
    public String solution(int a, int b) {
        int[] lastdate = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        String[] days = {"FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU", };
        int passedDates = 0;
        for(int i=0; i<a-1; i++) {
        	passedDates += lastdate[i];
        }
        passedDates += (b-1);
        String answer = days[passedDates % 7];
        return answer;
    }
}
