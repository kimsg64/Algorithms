/*
	<¦���� Ȧ��>
	���� num�� ¦���� ��� "Even"�� ��ȯ�ϰ� Ȧ���� ��� "Odd"�� ��ȯ�ϴ� �Լ�, solution�� �ϼ����ּ���.
 */
public class EvenOrOdd {
    public String solution(int num) {
        String answer = num % 2 == 0 ? "Even" : "Odd";
        return answer;
    }
}
