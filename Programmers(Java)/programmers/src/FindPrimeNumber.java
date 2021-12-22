import java.util.ArrayList;
import java.util.List;

/*

<�Ҽ� ã��>
1���� �Է¹��� ���� n ���̿� �ִ� �Ҽ��� ������ ��ȯ�ϴ� �Լ�, solution�� ����� ������.

�Ҽ��� 1�� �ڱ� �ڽ����θ� ���������� ���� �ǹ��մϴ�.
(1�� �Ҽ��� �ƴմϴ�.)

���� ����
n�� 2�̻� 1000000������ �ڿ����Դϴ�.

<Ǯ��>
1. ���� n�� �Ҽ������� �Ǵ��ϴ� ���� ���� -> 2���� n-1���� ������ ���� ������ �������� ������ �Ҽ�(����� ������ �Ҽ�)
�ٵ� ���� ������ ���� 2���� n���� ���� �� �ʿ� ����... n/2������ ���� �ȴ�.
�̸��׸� 96�� �Ҽ������� �Ǻ��� ��, 96, 95, ... 49( > 96//2)�� �������������� Ȯ���� �ʿ䰡 ����.
�ֳ��ϸ� 1���� ū ���� ���� �ڿ����� 2�� �����ϴ� ����� 48�̹Ƿ�, 48���� ū ���� ������ ������ ���� ���� �����̴�.

2. 1�� 2���� n���� �ǽ�

��� �����ߴµ� �̰͵� �ð� ���ѿ� �ɸ��Ƿ� �����佺�׳׽��� ü�� Ȱ���ؼ� ��Ʈn������ Ȯ������.

��� �����ߴµ� �̰͵� ȿ���� �׽�Ʈ���� �ɸ���.
ȿ���� �׽�Ʈ�� ����ϱ� ���� �������� ���� �� ������ �ʿ��ѵ�,
 �� 1���� ū �ڿ����� ��� �Ҽ��� ������ �̷���� �ִ�. => �Ҽ��� �ƴ� ���� ����� üũ�� �ʿ�� ����. �Ҽ��� ���� primeNumbers �迭�� ���� ����
 �� n�� �����ٺ��� ���� �Ҽ��� ������ �������� ������ n�� �Ҽ��̴�. => n�� �����ٱ����� Ȯ���ϸ� �ȴ�.
 �� 2���� ū ¦���� ��� �Ҽ��� �ƴϴ�. => Ȧ���� �˻��ϸ� �ȴ�.

 */
public class FindPrimeNumber {
	
	public static void main(String args[]) {
		solution(101);
	}
	
    public static int solution(int n) {
    	List<Integer> primeNumbers = new ArrayList<Integer>();
    	System.out.println("�Էµ� n: " + n);
    	
    	// 1~n ���̿� �ִ� �Ҽ��� ������ Ȯ���ؾ� �ϹǷ� 2~n���� �Ҽ������� �Ǻ�
    	for(int i=2; i<=n; i++) {
    		System.out.println(i + "�� �Ҽ��ΰ�? �Ǻ� ����");
    		// i = 2, 3, 4, 5, 6, ... n�� ���� �Ҽ������� üũ
    		// ���� sqrt(i)���� ���� �Ҽ��� ������ ������������ Ȯ���ϰ�, ������ �������� ������ primeNumbers�� �Է��ϵ�, 2�� 3�� �Ҽ��̹Ƿ� ���Է�
    		if(i == 2 || i == 3) {
    			System.out.println(i + "�� �⺻ �Ҽ��� �Է���");
    			primeNumbers.add(i);
    		} else {
    			if(i % 2 == 0) {
    				System.out.println( i + "�� ¦���̹Ƿ� �Ҽ��� �ƴմϴ�.");
    				continue;
    			}
    			for(int j=0; j<primeNumbers.size(); j++) {
    				System.out.println(i + "�� " + i + "�� ������(����)�� " + (int)Math.sqrt(i) + "���� ���� primeNumbers�� " + j + "��° ������ " + primeNumbers.get(j) + "���� ������ �������°�");
    				if(primeNumbers.get(j) <= (int)Math.sqrt(i)) {
    					if(i % primeNumbers.get(j) == 0) {
    						System.out.println("��... �ʴ� �Ҽ��� �ƴ϶���.");
    						break;
    					} else {
    						System.out.println("�ƴѵ�? ���� �𸥴�");
    						if(j == primeNumbers.size()-1) {
    							System.out.println("���������� ��ƾ ���... �Ҽ��� �����մϴ�.");
    							primeNumbers.add(i);
    							break;
    						}
    					}    					
    				} else {
    					System.out.println("���������� ��ƾ ���... �Ҽ��� �����մϴ�.");
    					primeNumbers.add(i);
						break;
    				}
    			}    			
    		}
    	}
    	
    	System.out.print("primeNumbers ��Ȳ: [");
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
