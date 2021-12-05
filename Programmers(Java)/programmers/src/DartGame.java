/*
<��Ʈ ����>
īī���� ���Ӻ��� �Ϲݱ� �ű� ���񽺷� ��Ʈ ������ ����ϱ�� �ߴ�. ��Ʈ ������ ��Ʈ�ǿ� ��Ʈ�� �� ���� ���� �� ������ �հ�� �Ƿ��� �ܷ�� ��������, ��ΰ� ������ ��� �� �ִ�.
�� �Ի��� ������ �ڵ� �Ƿ��� �����޾� ������ �ٽ� �κ��� ���� ��� ������ �ð� �Ǿ���. ��Ʈ ������ ���� ��� ������ �Ʒ��� ����.

1. ��Ʈ ������ �� 3���� ��ȸ�� �����ȴ�.
2. �� ��ȸ���� ���� �� �ִ� ������ 0������ 10�������̴�.
3. ������ �Բ� Single(S), Double(D), Triple(T) ������ �����ϰ� �� ���� ��÷ �� �������� 1����, 2����, 3���� (����1 , ����2 , ����3 )���� ���ȴ�.
4. �ɼ����� ��Ÿ��(*) , ������(#)�� �����ϸ� ��Ÿ��(*) ��÷ �� �ش� ������ �ٷ� ���� ���� ������ �� 2��� �����. ������(#) ��÷ �� �ش� ������ ���̳ʽ��ȴ�.
5. ��Ÿ��(*)�� ù ��° ��ȸ������ ���� �� �ִ�. �� ��� ù ��° ��Ÿ��(*)�� ������ 2�谡 �ȴ�. (���� 4�� ����)
6. ��Ÿ��(*)�� ȿ���� �ٸ� ��Ÿ��(*)�� ȿ���� ��ø�� �� �ִ�. �� ��� ��ø�� ��Ÿ��(*) ������ 4�谡 �ȴ�. (���� 4�� ����)
7 .��Ÿ��(*)�� ȿ���� ������(#)�� ȿ���� ��ø�� �� �ִ�. �� ��� ��ø�� ������(#)�� ������ -2�谡 �ȴ�. (���� 5�� ����)
8. Single(S), Double(D), Triple(T)�� �������� �ϳ��� �����Ѵ�.
9. ��Ÿ��(*), ������(#)�� �������� �� �� �ϳ��� ������ �� ������, �������� ���� ���� �ִ�.

0~10�� ������ ���� S, D, T, *, #�� ������ ���ڿ��� �Էµ� �� �������� ��ȯ�ϴ� �Լ��� �ۼ��϶�.

�Է� ����
"����|���ʽ�|[�ɼ�]"���� �̷���� ���ڿ� 3��Ʈ.
��) 1S2D*3T

������ 0���� 10 ������ �����̴�.
���ʽ��� S, D, T �� �ϳ��̴�.
�ɼ��� *�̳� # �� �ϳ��̸�, ���� ���� �ִ�.

��� ����
3���� ��ȸ���� ���� ���� �հ迡 �ش��ϴ� �������� ����Ѵ�.
��) 37


<Ǯ��> ���̰� �������� �� ������ ���� ������� �����ϸ� �Ǵ� ���� �����̴�.
���� ��� ������ ������ ����
1. ����+SDT �� 3�� �ݺ� (k��� ����)
2. ������ k�� * or #�� �������� �ְ� ���� ���� ���� �ִ�.
3. *�� ���� k�� �ش� k�� 2���(���� k�� ������ �ش� k�� 2��), #�� �ش� k�� -�� �����, *�� *�� #�� ��ø ����

���� Ǯ�� ���� �� ���� �õ��� ������ ���� �ƽ�Ű �ڵ带 �̿��� ���� Ǯ �� �־���.
�ٸ� �Լ��� �ϳ� �� ���� �� �־��ٸ� �ڵ� ���̸� ����� ���� �� �־����ٵ�

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
