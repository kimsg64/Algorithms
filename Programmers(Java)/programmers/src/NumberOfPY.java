/*

�빮�ڿ� �ҹ��ڰ� �����ִ� ���ڿ� s�� �־����ϴ�.
s�� 'p'�� ������ 'y'�� ������ ���� ������ True, �ٸ��� False�� return �ϴ� solution�� �ϼ��ϼ���.
'p', 'y' ��� �ϳ��� ���� ���� �׻� True�� �����մϴ�. ��, ������ ���� �� �빮�ڿ� �ҹ��ڴ� �������� �ʽ��ϴ�.
���� ��� s�� "pPoooyY"�� true�� return�ϰ� "Pyy"��� false�� return�մϴ�.

*/

public class NumberOfPY {
    boolean solution(String s) {
        boolean answer = true;
        char[] sArray = s.toUpperCase().toCharArray();
        int numberOfP = 0;
        int numberOfY = 0;
        for(int i=0; i<sArray.length; i++) {
        	if(sArray[i] == 'P') {
        		numberOfP++;
        	} else if (sArray[i] == 'Y') {
        		numberOfY++;
        	}
        }
        answer = numberOfP == numberOfY ? true : false; 
        return answer;
    }
}
