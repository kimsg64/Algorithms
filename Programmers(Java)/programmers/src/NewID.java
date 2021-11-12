/*
<�ű� ���̵� ��õ>
īī���� �Ի��� ���� ������ �׿��� "īī������������"�� ��ġ�Ǿ�, īī�� ���񽺿� �����ϴ� �������� ���̵� �����ϴ� ������ ����ϰ� �Ǿ����ϴ�.
"�׿�"���� �־��� ù ������ ���� �����ϴ� �������� īī�� ���̵� ��Ģ�� ���� �ʴ� ���̵� �Է����� ��, �Էµ� ���̵�� �����ϸ鼭 ��Ģ�� �´� ���̵� ��õ���ִ� ���α׷��� �����ϴ� ���Դϴ�.
������ īī�� ���̵��� ��Ģ�Դϴ�.

���̵��� ���̴� 3�� �̻� 15�� ���Ͽ��� �մϴ�.
���̵�� ���ĺ� �ҹ���, ����, ����(-), ����(_), ��ħǥ(.) ���ڸ� ����� �� �ֽ��ϴ�.
��, ��ħǥ(.)�� ó���� ���� ����� �� ������ ���� �������� ����� �� �����ϴ�.
"�׿�"�� ������ ���� 7�ܰ��� �������� ó�� ������ ���� �ű� ������ �Է��� ���̵� īī�� ���̵� ��Ģ�� �´� �� �˻��ϰ� ��Ģ�� ���� ���� ��� ��Ģ�� �´� ���ο� ���̵� ��õ�� �ַ��� �մϴ�.
�ű� ������ �Է��� ���̵� new_id ��� �Ѵٸ�,

1�ܰ� new_id�� ��� �빮�ڸ� �����Ǵ� �ҹ��ڷ� ġȯ�մϴ�.
2�ܰ� new_id���� ���ĺ� �ҹ���, ����, ����(-), ����(_), ��ħǥ(.)�� ������ ��� ���ڸ� �����մϴ�.
3�ܰ� new_id���� ��ħǥ(.)�� 2�� �̻� ���ӵ� �κ��� �ϳ��� ��ħǥ(.)�� ġȯ�մϴ�.
4�ܰ� new_id���� ��ħǥ(.)�� ó���̳� ���� ��ġ�Ѵٸ� �����մϴ�.
5�ܰ� new_id�� �� ���ڿ��̶��, new_id�� "a"�� �����մϴ�.
6�ܰ� new_id�� ���̰� 16�� �̻��̸�, new_id�� ù 15���� ���ڸ� ������ ������ ���ڵ��� ��� �����մϴ�.
     ���� ���� �� ��ħǥ(.)�� new_id�� ���� ��ġ�Ѵٸ� ���� ��ġ�� ��ħǥ(.) ���ڸ� �����մϴ�.
7�ܰ� new_id�� ���̰� 2�� ���϶��, new_id�� ������ ���ڸ� new_id�� ���̰� 3�� �� ������ �ݺ��ؼ� ���� ���Դϴ�.


[����]
�ű� ������ �Է��� ���̵� ��Ÿ���� new_id�� �Ű������� �־��� ��, "�׿�"�� ������ 7�ܰ��� ó�� ������ ��ģ ���� ��õ ���̵� return �ϵ��� solution �Լ��� �ϼ��� �ּ���.

[���ѻ���]
new_id�� ���� 1 �̻� 1,000 ������ ���ڿ��Դϴ�.
new_id�� ���ĺ� �빮��, ���ĺ� �ҹ���, ����, Ư�����ڷ� �����Ǿ� �ֽ��ϴ�.
new_id�� ��Ÿ�� �� �ִ� Ư�����ڴ� -_.~!@#$%^&*()=+[{]}:?,<>/ �� �����˴ϴ�.

*/
public class NewID {
    public String solution(String new_id) {
    	// 1�ܰ�
        String target = new_id.toLowerCase();
        
        // 2�ܰ�
        for (int i=0; i<target.length(); i++) {
        	int ascii = (int)target.charAt(i);
        	if(ascii == 45 || ascii == 46 || (47 < ascii && ascii < 58) || ascii == 95 || (96 < ascii && ascii < 123)) {
        		continue;
        	} else {
        		target = target.replace(String.valueOf(target.charAt(i)), "@");
        	}
        }
        // 2�ܰ��� ?(length�� �����ϱ� ���� �ӽ÷� ���� ��) ����
        target = target.replaceAll("@", "");
        
        // 3�ܰ�
        while(target.contains("..")) {
        	target = target.replace("..", ".");
        }
        
        // 4�ܰ�
        if((int)target.charAt(0) == 46 && target.length() == 1) {
            target = "a";
          } else if((int)target.charAt(0) == 46&& target.length() != 1) {
            target = target.substring(1);
          }
          if((int)target.charAt(target.length()-1) == 46) {
            target = target.substring(0, target.length()-1);
          }
        
        // 5�ܰ�
        target = target.replaceAll(" ", "a");
        
        // 6�ܰ�
        if(target.length() >= 16) {
        	target = target.substring(0, 15);
        	
            if((int)target.charAt(0) == 46) {
            	target = target.substring(1);
            }
            if((int)target.charAt(target.length()-1) == 46) {
            	target = target.substring(0, target.length()-1);
            }
        }
        
        // 7�ܰ�
        while(target.length() <= 2) {
        	target = target + target.charAt(target.length()-1);
        }
        
        return target;
    }
}
