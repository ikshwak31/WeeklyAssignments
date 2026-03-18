import java.util.Scanner;

class VoteCheck
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);

        int age[] = new int[10];
        int i;

        // taking input
        for(i = 0; i < age.length; i++)
        {
            System.out.print("Enter age of student " + (i+1) + " : ");
            age[i] = s.nextInt();
        }

        System.out.println("\nResult");

        // checking voting eligibility
        for(i = 0; i < age.length; i++)
        {
            if(age[i] < 0)
            {
                System.out.println("Invalid age");
            }
            else if(age[i] >= 18)
            {
                System.out.println("The student with the age " + age[i] + " can vote");
            }
            else
            {
                System.out.println("The student with the age " + age[i] + " cannot vote");
            }
        }
    }
}